import { useReducer } from "react";

const Form = () => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }

  const [formData, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <p>
          {formData.username} - {formData.email}
        </p>
      </form>
    </div>
  );
};

export default Form;
