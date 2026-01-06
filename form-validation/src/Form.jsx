import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const Form = () => {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      age: 23,
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumber: ["", ""],
      dob: new Date(),
    },
  });

  //   const { register, handleSubmit, control, formState } = useForm({
  //     defaultValues: async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users/1"
  //       );
  //       const data = await response.json();
  //       return {
  //         name: data?.name,
  //         email: data?.email,
  //         age: 18,
  //       };
  //     },
  //   });

  const { errors } = formState;

  console.log(useForm());

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
            validate: {
              notAdminEmail: (value) => {
                return value !== "admin@gmail.com" || "Enter a different email";
              },
              notBlacklistedEmail: (value) => {
                return (
                  !value.endsWith("@blacklisted.com") ||
                  "This domain is not allowed"
                );
              },
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <br />
        <br />

        <label htmlFor="age">Age</label>
        <br />
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: "Age is required",
            min: {
              value: 18,
              message: "Age must be at least 18",
            },
            max: {
              value: 25,
              message: "Age must be less than 25",
            },
          })}
        />
        {errors.age && <p className="error">{errors.age.message}</p>}

        <br />
        <br />
        <label htmlFor="primary-phonenumber">Primary Phone Number</label>
        <br />
        <input
          type="text"
          id="primary-phonenumber"
          {...register("phonenumber.0")}
        />

        <br />
        <br />

        <label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
        <br />
        <input
          type="text"
          id="secondary-phonenumber"
          {...register("phonenumber.1")}
        />

        <br />
        <br />

        <label htmlFor="dob">DOB </label>
        <br />
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
          })}
        />

        <br />
        <br />
        <label htmlFor="facebook">Facebook</label>
        <br />
        <input type="text" id="facebook" {...register("social.facebook")} />

        <br />
        <br />
        <label htmlFor="facebook">Twitter</label>
        <br />
        <input type="text" id="twitter" {...register("social.twitter")} />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
};

export default Form;
