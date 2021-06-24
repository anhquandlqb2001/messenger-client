import { Form, Formik } from "formik";
import InputField from "../../../app/components/InputField";
import FormSubmit from "./FormSubmit";

type Props = {
  onOptionClick: any;
};

const RegisterForm: React.FC<Props> = ({ onOptionClick }) => {
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
          <InputField
            placeholder="Retype password"
            required
            name="repassword"
            type="password"
            id="repassword"
            autoComplete="current-password"
          />
          <FormSubmit
            onOptionClick={onOptionClick}
            submitText={"Register"}
            optionText={"Already have account? Login now"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
