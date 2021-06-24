import { Form, Formik } from "formik";
import InputField from "../../../app/components/InputField";
import FormSubmit from "./FormSubmit";

type Props = {
  onOptionClick: any;
};

const LoginForm: React.FC<Props> = ({ onOptionClick }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        console.log(values);
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
