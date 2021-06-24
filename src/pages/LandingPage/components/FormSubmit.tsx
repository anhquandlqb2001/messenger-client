import styled from "styled-components";
import tw from "twin.macro";

const LoginButton = styled.button`
  ${tw`bg-blue-600 font-medium text-white px-6 py-2 rounded-3xl`}
`;

const FormSubmitContainer = styled.div`
  ${tw`flex flex-row items-center mt-4`}
`;

const Option = styled.p`
  ${tw`underline cursor-pointer ml-4 text-sm`}
`;

type Prop = {
  submitText: string;
  optionText: string;
  onOptionClick: any;
};

const FormSubmit: React.FC<Prop> = ({
  submitText,
  optionText,
  onOptionClick,
}) => {
  return (
    <FormSubmitContainer>
      <LoginButton>{submitText}</LoginButton>
      <Option onClick={onOptionClick}>{optionText}</Option>
    </FormSubmitContainer>
  );
};

export default FormSubmit;
