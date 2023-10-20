import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "socket.io-client";


export const io = socket('http://localhost:4000');

export const UserContext = createContext({} as any);

export const UserStore = ({ children }: { children: React.ReactNode }) => {

    
  return (
    <UserContext.Provider
      value={{   

            }}>
      {children}
    </UserContext.Provider>
  );
};
