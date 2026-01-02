import { useState } from "react";

const useForm = ({ initialValues, validations, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldRules = validations[name];
    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
        return;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    for (const field in validations) {
      for (const rule of validations[field]) {
        const error = rule(values[field]);
        if (error) {
          newErrors[field] = error;
          return;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(values);
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
