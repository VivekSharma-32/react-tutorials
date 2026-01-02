import Input from "./components/form/input";
import useForm from "./hooks/use-form";
import { email, minimumLength, required } from "./utils/validators";

const FormExample = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validations: {
      name: [required],
      email: [required, email],
      password: [required, minimumLength(8)],
    },
    onSubmit: (values) => {
      console.log("Submitted : " + values);
    },
  });
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        className="w-3/4 border border-gray-200 rounded-md p-4 flex flex-col gap-4"
        onSubmit={form.handleSubmit}
      >
        <Input
          label={"Name"}
          name={"name"}
          value={form.values.name}
          onChange={form.handleChange}
          error={form.errors.name}
        />
        <Input
          label={"Email"}
          name={"email"}
          value={form.values.email}
          onChange={form.handleChange}
          error={form.errors.email}
        />
        <Input
          label={"Password"}
          name={"password"}
          value={form.values.password}
          onChange={form.handleChange}
          error={form.errors.password}
        />
        <div className="flex w-full justify-end ">
          <button
            type="Submit"
            className="px-4  py-2 rounded-md bg-gray-300 font-semibold cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
