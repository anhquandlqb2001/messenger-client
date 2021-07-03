import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { conversationsSelectors, fetchConversations } from "../../services/conversations/slices";
import { selectUser, userProfile } from "../../services/user/slices";

const Message = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const conversations = useAppSelector(conversationsSelectors.selectAll);

  useEffect(() => {
    const promise = dispatch(userProfile(""));
    return () => promise.abort();
  }, []);

  useEffect(() => {
    const promise = dispatch(fetchConversations());
    return () => promise.abort();
  }, []);

  return <div>{conversations.map(c => <h1>{c.title}</h1>)}</div>;
};

export default Message;
