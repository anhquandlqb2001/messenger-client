import styled from "styled-components";
import tw from "twin.macro";
import Conversation from "./components/Conversation";
import Message from "./components/Message";

const ChatContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  ${tw`flex flex-row`}
`;

const ConversationWrapper = styled.div`
  flex: 1.5;
  border-right-width: 1px;
  height: 100%;
  ${tw`border-gray-600 border-opacity-30`}
`;

const MessageWrapper = styled.div`
  flex: 4;
`;

const OptionWrapper = styled.div`
  flex: 1.5;
  border-left-width: 1px;
  height: 100%;
  ${tw`border-gray-600 border-opacity-30`}
`;

const Chat = () => {
  return (
    <ChatContainer>
      <ConversationWrapper>
        <Conversation />
      </ConversationWrapper>
      <MessageWrapper>
        <Message />
      </MessageWrapper>
      <OptionWrapper />
    </ChatContainer>
  );
};

export default Chat;
