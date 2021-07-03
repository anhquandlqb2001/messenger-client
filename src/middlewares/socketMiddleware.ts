import { Middleware } from "@reduxjs/toolkit";
import io, { Socket } from "socket.io-client";
import { addMessage, Message } from "../services/conversations/slices";

const createSocketMiddleware: Middleware = (api) => (next) => (action) => {
  let socket: Socket;
  switch (action.type) {
    case "user/fetchProfile/fulfilled": {
      socket = io("http://localhost:5000", { forceNew: true });
      socket.on("receive-message", (message: Message) => {
        api.dispatch(
          addMessage({ conversationId: message.conversationId, message })
        );
      });
      return next(action);
    }
  }

  return next(action);
};

export default createSocketMiddleware;
