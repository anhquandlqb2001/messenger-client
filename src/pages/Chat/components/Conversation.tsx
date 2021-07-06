import styled from "styled-components";
import tw from "twin.macro";

const ConversationItemContainer = styled.div`
  ${tw`flex my-2 items-center cursor-pointer py-2 hover:bg-gray-200`}
`;

const Avatar = styled.div`
  ${tw`rounded-full w-14 h-14 bg-gray-700`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-col`}
`;

const ConversationItem = () => (
  <ConversationItemContainer>
    <Avatar />
    <ContentContainer>
      <h3>Nguyen Truyen</h3>
      <p>Akiklooo</p>
    </ContentContainer>
  </ConversationItemContainer>
);

const Conversation = () => {
  const conversations = [1, 2, 3].map((item) => <ConversationItem />);
  return <>{conversations}</>;
};

export default Conversation;
