import socket from "socket.io-client";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import{
    Container,
    BackGround,
    ChatContainer,
    TitleChat,
    ChatSpanRegister,
    ChatInputRegister,
    SendButtonChat,
    

  
} from "./styled_home";
const io = socket('http://localhost:4000');


function Home() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    io.emit("join", name, number);

  }, [name, number]);
  

  const handleJoin = () =>{
    io.emit("join", name, number);
    navigate('/chats')
  };

  return (
    <Container>
      <BackGround></BackGround>
      <ChatContainer>
        <TitleChat>Seja bem vindo ao ZapChat!</TitleChat>
        <ChatSpanRegister>Faça seu cadastro</ChatSpanRegister>
        <ChatInputRegister type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
        <ChatInputRegister type="number" placeholder='Numero (celular)' value={number} onChange={(e) => setNumber(e.target.value)} />
        <SendButtonChat onClick={() => handleJoin()} >Cadastrar</SendButtonChat>
      </ChatContainer>
    </Container>
  );
}

export default Home;
