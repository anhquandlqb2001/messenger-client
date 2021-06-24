import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

const Input = styled.input`
  ${tw`border-solid border-gray-300 border py-2 px-4 w-full
    rounded my-2 text-gray-500`}
`;

const InputError = styled.div`
  ${tw`mb-3 text-red-500`}
`;

const InputField = (props: InputFieldProps) => {
  const [field, { error }] = useField(props as any);

  return (
    <>
      <Input autoFocus {...props} {...field} />
      {error && <InputError>{error}</InputError>}
    </>
  );
};

export default InputField;
