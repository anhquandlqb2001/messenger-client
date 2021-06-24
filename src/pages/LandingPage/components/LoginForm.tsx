import { Form, Formik } from "formik";
import InputField from "../../../app/components/InputField";
import FormSubmit from "./FormSubmit";

type Props = {
  onOptionClick: () => void;
};

type LoginFormProperties = {
  email: string,
  password: string
}

const LoginForm: React.FC<Props> = ({ onOptionClick }) => {
  const onSubmit = (values: LoginFormProperties) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField
            placeholder="Email address"
            required
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <InputField
            placeholder="Password"
            required
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormSubmit
            onOptionClick={onOptionClick}
            submitText={"Login"}
            optionText={"Don't have account? Register now"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
