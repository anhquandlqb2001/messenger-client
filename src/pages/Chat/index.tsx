import { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  conversationsSelectors,
  fetchConversations,
} from "../../services/conversations/slices";
import { selectUser, fetchProfile } from "../../services/user/slices";
import Conversation from "./components/Conversation";

const ChatContainer = styled.div`
  height: 100vh;
  ${tw`flex flex-row`}
`;

const ConversationWrapper = styled.div`
  flex: 1;
  border-right-width: 1px;
  height: 100%;
  ${tw`border-gray-600 border-opacity-30 m-2`}
`;

const MessageWrapper = styled.div`
  flex: 4;
`;

const Chat = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const conversations = useAppSelector(conversationsSelectors.selectAll);

  useEffect(() => {
    const promise = dispatch(fetchProfile(""));
    return () => promise.abort();
  }, []);

  useEffect(() => {
    const promise = dispatch(fetchConversations());
    return () => promise.abort();
  }, []);

  return (
    <ChatContainer>
      <ConversationWrapper>
        <Conversation />
      </ConversationWrapper>
      <MessageWrapper>Yo</MessageWrapper>
    </ChatContainer>
  );
};

export default Chat;
