import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import {
  Container,
  BackGround,
  ChatContainer,
  TitleChat,
  ChatSpanRegister,
  ChatInputRegister,
  SendButtonChat,
  ErrorMessage,
  
} from "./styled_login";
const socket = io('http://localhost:4000');

function Login({ onLogin }:any) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleJoin = () => {
    if (name.trim() === '' || number.trim() === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError("");
      socket.emit("register", name, number);
      onLogin(name, number);
      navigate('/chats');
    }
  };


  return (
    <Container>
      <BackGround></BackGround>
      <ChatContainer>
        <TitleChat>Seja bem-vindo ao ZapChat!</TitleChat>
        <ChatSpanRegister>Faça seu cadastro</ChatSpanRegister>
        <ChatInputRegister
          type="text"
          placeholder="Nome"
          max="10"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              handleJoin()
            }
          }}
        />
        <ChatInputRegister
          type="number"
          placeholder="Número (celular)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              handleJoin()
            }
          }}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <SendButtonChat
          onClick={handleJoin}
        >
        Cadastrar
      </SendButtonChat>
      </ChatContainer>
    </Container>
  );
}


export default Login;
