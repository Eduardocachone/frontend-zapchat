import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

import BackButtonIMG from "../../assets/back-button.png";
import SendButton from "../../assets/send.png"

import {
    //estilização da pagina
  Container,
  BackGround,
  ChatContainer,

  //estilização do menu
  ContainerMenu,
  BackGroundMenu,
  NewChatButton,
  BackButton,
  ContainerDropDomAddChat,
  BackGroundDropDomAddChat,
  InputsAddChat,
  InputsContainer,
  InputsSpan,
  InputsSpanInformation,
  NewChatButtonAdd,
  ErrorMessage,
  DivaiderChats,
  NameChats,
  Chat,
  ChatsInitial,
  InitiName,

//estilização do chat

  ContainerChat,
  BackGroundChat,
  ChatArea,
  UserNames,
  RoomName,
  InitiRoomName,
  ContainerNotChat,
  ContainerChatVerify,
  InformationEnterRoom,
  WelcomeUser,
  InformationAdd,
  UserJoinRoom,
  MessageJoinUserRoom,
  AreaSendMessage,
  MessageInput,
  MessageButtonSend,



}from "./styled_chats";

const socket = io('http://localhost:4000');

function Chats({ userName, userNumber }:any) {
  const navigate = useNavigate();

    

  const [roomName, setRoomName] = useState("");

  const [error, setError] = useState("");

  const [selectRoomId, setSelectRoomId] = useState("");
  const myNumber = userNumber;

 
  const [messageJoinUser, setMessageJoinUser] = useState("");

  const [message, setMessage] = useState("");

  const [isOpenAddChat, setIsOpenAddChat] = useState(false);


  const [userMessages, setUserMessages]:any = useState([]);
  const [lastMessages, setLastMessages]:any = useState([]);

  const [dataRooms, setDataRooms]:any = useState([]);
  

  const [usersInRoom, setUsersInRoom]:any = useState([]);
  const [currentRoomName, setCurrentRoomName] = useState("");
  const [isUserInRoom, setIsUserInRoom] = useState(false);

  
  const [showUserJoinMessage, setShowUserJoinMessage] = useState(false);

  const scrollRef:any = useRef(null);
  
  useEffect(() => {

    socket.emit("checkUserInRoom", myNumber);

    socket.on('userInRoomStatus', (status) => {
      setIsUserInRoom(status);
    });


    socket.on("usersInRoom", (usersInRoom) => {
      setUsersInRoom(usersInRoom);
    });

    socket.emit("reloadPage");

    socket.on("userJoinedInRoom", (messageUserJoin: string) => {
      setMessageJoinUser(messageUserJoin);
      setShowUserJoinMessage(true);

      setTimeout(() => {
        setShowUserJoinMessage(false);
      }, 5000);
    });
    socket.on("message", (userMessage:any) => setUserMessages((userMessages:any) =>[... userMessages, userMessage]));
    socket.on("allrooms", (rooms:any) => setDataRooms(rooms));
  
    socket.on("allMessages", (messages: any[]) => {
      setUserMessages(messages);

    });
  
  }, []);

  const handleCreateChat = () => {
    if (roomName.trim() === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('');
      socket.emit("createRoom", roomName, userNumber );
      setIsOpenAddChat(false);
      setRoomName("");
    }
  };

  const handeleBackButton = () =>{
    setIsOpenAddChat(false);
    setError("");
  };


  const handeleJoinInRoom = (roomName:string , roomId:string , myNumber:number ) =>{
      setSelectRoomId(roomId);
      socket.emit("joinRoom", roomId, myNumber);
      socket.emit("getAllMessages", roomId);
      setCurrentRoomName(roomName);
      socket.emit("checkUserInRoom", myNumber);

  };

  const handeleMessage = () =>{
    if (message.trim() === '') {
    } else {
      socket.emit("message",message, selectRoomId, myNumber);
      setMessage("");
    }
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [handeleMessage]);

  return(

    <Container>
        <BackGround></BackGround>
        <ChatContainer>

        <ContainerMenu>
            <BackGroundMenu>
              <InitiName>{userName.charAt(0).toUpperCase()}</InitiName>
              <NewChatButton onClick={() => setIsOpenAddChat(!isOpenAddChat)}>Criar uma sala</NewChatButton>
              <button onClick={() => navigate('/')} >sair</button>
            </BackGroundMenu>

            <DivaiderChats >   
              
                {dataRooms.map((rooms:any, index:any) =>(
                  <Chat key={index} onClick={() => handeleJoinInRoom( rooms.roomName, rooms.roomId, myNumber)}> 
                  <div style={{width:"100%",display:"flex", alignItems:"center"}} >
                  <ChatsInitial>
                      {rooms.roomName.charAt(0).toUpperCase()}
                    </ChatsInitial>
                    <div  style={{width:"90%",marginLeft:"10px",color:"#3B4A54", display:"flex", flexDirection:"column"}}>
                      <NameChats>{
                        rooms.roomName
                      }</NameChats>
                      <span style={{color:"#677279", fontSize:"13px"}} >Sala de: {rooms.roomCreator}</span>
                    </div>
                  </div>
  
                  </Chat>
                ))}

            </DivaiderChats>   

              <ContainerDropDomAddChat isOpenAddChat={isOpenAddChat}>
                  <BackGroundDropDomAddChat>
                  <BackButton src={BackButtonIMG} alt="Back" onClick={() => handeleBackButton()} />
                  </BackGroundDropDomAddChat>
                  <InputsContainer>
                  <InputsSpan>Criar uma nova sala?</InputsSpan>
                  <InputsAddChat
                      type="text"
                      placeholder='Nome da sala'
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                      onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                          handleCreateChat()
                        }
                      }}
                  />

                  <ErrorMessage>{error}</ErrorMessage> 
                  <NewChatButtonAdd onClick={handleCreateChat}>Criar</NewChatButtonAdd>
                  
                  </InputsContainer>
              </ContainerDropDomAddChat>
          </ContainerMenu>

          <ContainerChatVerify>
          {isUserInRoom ? (
            <ContainerChat ref={scrollRef}>
            <BackGroundChat>
              <InitiRoomName>{currentRoomName.charAt(0).toUpperCase()}</InitiRoomName>
              <div style={{display:"flex", flexDirection:"column"}} >
                  <RoomName>{currentRoomName}</RoomName>
              <UserNames>
              {usersInRoom.map((user: any, index: any) => (
                <span key={index}>
                  {user.name.length <= 10 ? user.name : `${user.name.substring(0, 10)}...`}
                  {index < usersInRoom.length - 1 && " ,"}
                </span>
              ))}
              </UserNames>
              </div>
            </BackGroundChat>
              
            <ChatArea >
            {showUserJoinMessage &&
              <UserJoinRoom>
                 <MessageJoinUserRoom>{messageJoinUser}</MessageJoinUserRoom>
              </UserJoinRoom>
            }

            {userMessages.map((userMessage: any, index: any) => (
              <div className={userMessage.userNumber === myNumber ? 'MyUserMessage' : 'OtherUserMessage'} key={index}>
                <div className={userMessage.userNumber === myNumber ? 'MyMessage' : 'OtherMessage'} >
                  <span className={userMessage.userNumber === myNumber ? 'Myname' : 'Othername'}>{userMessage.userName}<br/></span>
                  <span> {userMessage.message}</span>
                  <span style={{fontSize:"13px",color:"#4c4c4c"}}> :{userMessage.date}</span>
                </div>
              </div>
            ))}

            
            </ChatArea>
                <AreaSendMessage>
                  <MessageInput 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensagem" 
                    onKeyDown={(e) => {
                      if(e.key === 'Enter') {
                       handeleMessage();
                      }
                    }}
                  />
                  <MessageButtonSend src={SendButton} alt="SandButton" onClick={handeleMessage}/>

                </AreaSendMessage>
        </ContainerChat>
          ) : (
           <ContainerNotChat>
              <WelcomeUser>Olá {userName} seja bem vindo!</WelcomeUser>
              <InformationEnterRoom>Você ainda não esta em uma sala, clique no botão abaixo para criar uma.</InformationEnterRoom>
              <NewChatButton onClick={() => setIsOpenAddChat(!isOpenAddChat)}>Criar uma sala</NewChatButton>
              {/* <InformationAdd>©Projeto desenvolvido por Eduardo Cachone</InformationAdd> */}
           </ContainerNotChat>
          )}
              
          </ContainerChatVerify>

                  
        </ChatContainer>
    </Container>
  );
}

export default Chats; 