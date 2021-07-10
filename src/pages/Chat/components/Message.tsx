import styled from "styled-components";
import tw from "twin.macro";

const MessageContainer = styled.div`
  ${tw`flex`}
`;

const MessageContentContainer = styled.div`
  ${tw`px-2 py-1 rounded-lg`}
`

const IncomingMessageContainer = styled(MessageContentContainer)`
  ${tw`inline-block bg-blue-400`}
`;

const OutgoingMessageContainer = styled(MessageContentContainer)`
  ${tw`inline-block bg-gray-400 ml-auto`}
`;

const IncomingMessage = () => {
  return (
    <MessageContainer>
      <IncomingMessageContainer>Hello world</IncomingMessageContainer>
    </MessageContainer>
  );
};

const OutgoingMessage = () => {
  return (
    <MessageContainer>
      <OutgoingMessageContainer>Hello</OutgoingMessageContainer>
    </MessageContainer>
  );
};

const Chat = () => {
  return (
    <div>
      <IncomingMessage />
      <OutgoingMessage />
    </div>
  );
};

export default Chat;
