import { Middleware } from "@reduxjs/toolkit";
import io, { Socket } from "socket.io-client";

const createSocketMiddleware: Middleware = (api) => (next) => (action) => {
  switch (action.type) {
    case "user/userProfile": {
      const socket = io('http://localhost:5000');

      socket.on("message-receive", (message) => {
        api.dispatch({
          type: "SOCKET_MESSAGE_RECEIVED",
          payload: message,
        });
      });
      return next(action);
    }
    case "SEND_WEBSOCKET_MESSAGE": {
      // socket.send(action.payload);
      // return next(action);
    }
  }

  return next(action);
};

export default createSocketMiddleware;
