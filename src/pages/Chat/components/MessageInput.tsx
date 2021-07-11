import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ButtonSvg } from "../../../assets/images/sendButton.svg";

const MessageInputWrapper = styled.div`
  ${tw`flex p-2`}
`;

const InputField = styled.input`
  flex: 1;
  ${tw`bg-gray-200 p-2 outline-none rounded-2xl`};
`;

const SendButtonWrapper = styled.div`
  ${tw`cursor-pointer p-2 ml-1`}
`;

const MessageInput = () => {
  return (
    <MessageInputWrapper>
      <InputField placeholder={"Aa"} />
      <SendButtonWrapper>
        <ButtonSvg />
      </SendButtonWrapper>
    </MessageInputWrapper>
  );
};

export default MessageInput;
