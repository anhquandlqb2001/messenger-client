import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import io, { Socket } from "socket.io-client";
import { AppDispatch } from "../app/store";

const createSocketMiddleware: () => Middleware = () => {

  return storeAPI => next => (action) => {
    let socket: Socket
    switch (action.type) {
      case "user/userProfile": {
        socket = io("/");

        socket.on("message", (message) => {
          storeAPI.dispatch({
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
};

export default createSocketMiddleware;
