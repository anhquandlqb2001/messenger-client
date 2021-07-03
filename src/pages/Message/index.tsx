import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser, userProfile } from "../../services/user/userSlice";

const Message = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);

  useEffect(() => {
    const promise = dispatch(userProfile(""));
    return () => promise.abort();
  }, []);

  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default Message;
