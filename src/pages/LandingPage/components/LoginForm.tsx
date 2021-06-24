import { Form, Formik } from "formik";
import InputField from "../../../components/InputField";
import { useAppDispatch } from "../../../app/hooks";
import { FormError, loginUser } from "../../../services/user/userSlice";
import FormSubmit from "./FormSubmit";
import { useHistory } from "react-router";

type Props = {
  onOptionClick: () => void;
};

export type LoginFormProperties = {
  email: string;
  password: string;
};

const LoginForm: React.FC<Props> = ({ onOptionClick }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        const resultAction = await dispatch(loginUser(values));
        if (resultAction.type.includes("fulfilled")) {
          // const jwt = resultAction.payload;
          history.push("/m");
        } else {
          const formError = resultAction.payload as FormError;
          if (formError) {
            // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
            setErrors({
              email: "Wrong email or password",
              password: "Wrong email or password", //formError.message,
            });
          }
        }
        setSubmitting(false);
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
