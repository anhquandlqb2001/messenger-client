import { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  conversationsSelectors,
  fetchConversations,
} from "../../../services/conversations/slices";

const ConversationItemContainer = styled.div`
  ${tw`flex my-2 items-center cursor-pointer py-2 hover:bg-gray-200`}
`;

const ConversationContainer = styled.div`
  ${tw`mx-2`}
`

const Avatar = styled.div`
  ${tw`rounded-full w-14 h-14 bg-gray-700`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-col ml-2`}
`;

const LatestMessage = styled.p`
  ${tw`text-gray-600`}
`;

type ConversationItemProps = {
  title: string;
  latestMessage?: string;
};

const ConversationItem: React.FC<ConversationItemProps> = ({ title }) => (
  <ConversationItemContainer>
    <Avatar />
    <ContentContainer>
      <h3>{title}</h3>
      <LatestMessage>Akiklooo</LatestMessage>
    </ContentContainer>
  </ConversationItemContainer>
);

const Conversation = () => {
  const dispatch = useAppDispatch();

  const conversations = useAppSelector(conversationsSelectors.selectAll);

  useEffect(() => {
    const promise = dispatch(fetchConversations());
    return () => promise.abort();
  }, []);

  return (
    <ConversationContainer>
      {conversations.map((conversation) => (
        <ConversationItem key={conversation.id} title={conversation.title} />
      ))}
    </ConversationContainer>
  );
};

export default Conversation;
