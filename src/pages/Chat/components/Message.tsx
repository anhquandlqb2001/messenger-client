import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "../../../app/hooks";
import conversationApi from "../../../services/conversations/apis";
import { Message } from "../../../services/conversations/slices";
import { selectUser } from "../../../services/user/slices";
import MessageInput from "./MessageInput";

const MessageContainer = styled.div`
  ${tw`flex mb-2`}
`;

const MessageContentContainer = styled.div`
  ${tw`px-2 py-1 rounded-lg`}
`;

const IncomingMessageContainer = styled(MessageContentContainer)`
  ${tw`inline-block bg-gray-400`}
`;

const OutgoingMessageContainer = styled(MessageContentContainer)`
  ${tw`inline-block bg-blue-400 ml-auto`}
`;

const ChatContainer = styled.div`
  ${tw`flex min-h-screen max-h-screen flex-col`}
`;

const MessageInputWrapper = styled.div`
  ${tw`mt-auto w-full`}
`;

const MessageHistory = styled.div``;

const IncomingMessage: React.FC<Message> = ({ message }) => {
  return (
    <MessageContainer>
      <IncomingMessageContainer>{message}</IncomingMessageContainer>
    </MessageContainer>
  );
};

const OutgoingMessage: React.FC<Message> = (message) => {
  return (
    <MessageContainer>
      <OutgoingMessageContainer>{message.message}</OutgoingMessageContainer>
    </MessageContainer>
  );
};

const Chat = () => {
  const { user } = useAppSelector(selectUser);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await conversationApi.messages(
        "8facb8c4-e1d6-4f31-84bc-587e99cb0b35"
      );
      setMessages(response.data.messages);
    };

    fetchMessages();
  }, []);

  const chat = messages.map((message) =>
    message.user === user?.id ? (
      <OutgoingMessage {...message} />
    ) : (
      <IncomingMessage {...message} />
    )
  );

  return (
    <ChatContainer>
      <MessageHistory>{chat}</MessageHistory>
      <MessageInputWrapper>
        <MessageInput />
      </MessageInputWrapper>
    </ChatContainer>
  );
};

export default Chat;
