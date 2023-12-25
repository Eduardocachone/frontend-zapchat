import {styled, createGlobalStyle, css } from "styled-components";


import BackgroundChat from"../../assets/BackGoundChat.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400;500&family=Gabarito:wght@600&display=swap');

`;

//estilização da pagina
export const Container = styled.div`
    height: 100vh;
    background-color: #E5F3BA;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackGround = styled.div`
    width: 100%;
    height: 18%;
    background-color: #80D3BB;
    position: absolute;
    top: 0;
`;

export const ChatContainer = styled.div`
    width: 97%;
    max-width: 1800px;
    height: 92%; 
    margin-top: 2%;
    position: absolute;
    display: flex;
    
    background-color: #FFF;

`;


//estilização do menu
export const ContainerMenu = styled.div`
  width: 30%;
  background-color: #fff;
  display: flex;
  flex-direction:column;

 
  overflow: auto;
`;

export const BackGroundMenu = styled.div`
  background-color:#F0F2F5;
  height: 70px;
  width: 30%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E3E3E3;
  margin-bottom: 10px;
  position: absolute;
  
`;


export const DivaiderChats = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction:column ;

`;

  export const InitiName = styled.span`
  color: #1F1F1F;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  font-size: 23px;
  margin:30px;
  border: 1px solid gray;
  border-radius: 50%;
`;

export const Chat = styled.div`
  display: flex;
  
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #E3E3E3;
  flex-direction: column;
  box-sizing:border-box;
  padding: 5px;
  cursor: pointer;


&:hover {
  background-color: #E3E3E3;
}
`;

export const ChatsInitial = styled.span`
  margin-left: 10px;
  font-size: 30px;
  padding: 14px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid gray;
  box-sizing: border-box;
  color: black;
  font-family: 'AR One Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

`;


export const NameChats = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  font-family: 'AR One Sans', sans-serif;

`;


export const NewChatButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #00755C;
  color: white;
  border: 1px solid #006952;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

&:hover {
    background-color: #004443;
  }
`;

export const ContainerDropDomAddChat = styled.div<{isOpenAddChat:boolean}>`
  width: 30%;
  max-width: 800px;
  height: 100%; 
  background-color: #fff;
  position: absolute;
  display:  ${({isOpenAddChat})=> isOpenAddChat? 'flex':'none'};

  border-right: 1px solid #6c8a82;


`;


export const BackGroundDropDomAddChat = styled.div`
  background-color: #F0F2F5;
  height: 10%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.img`
  width: 8%;
  height: auto;
  border-radius: 50%;
  background-color:gray ;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const InputsAddChat = styled.input`
  width: 90%;
  height: 25px;
  border: #BAFDC2 solid 2px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 3px;
  margin-top: 20px;
  
  &:focus {
    outline: none;
  }
`;

export const InputsSpan = styled.span`
  font-size: 29px;
  font-weight: 500;
  font-family: 'AR One Sans', sans-serif;
  margin-top: 30px;
  margin-bottom: 20px;
`;


export const InputsSpanInformation = styled.span`
  width: 80%;
  font-size: 18px;
  font-weight: 450;
  font-family: 'AR One Sans', sans-serif;
  margin-top: 80px;
  color: grey;
`;



export const NewChatButtonAdd = styled.button`
  width: 90%;
  height: 8%;
  background-color: #00755C;
  color: white;
  border: 1px solid #006952;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 40px;

&:hover {
    background-color: #004443;
  }
`;


export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;


//estilização do chat

export const ContainerNotChat = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,  #fff, #F0F2F5);
  box-sizing: border-box;
  border-left: 1px gray solid;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WelcomeUser = styled.span`
 color:#000;
 font-size: 29px;
 font-family: 'AR One Sans', sans-serif;
 margin-top: 10%;
 font-weight: 600;
`;


export const InformationEnterRoom = styled.span`
 color:#000;
 font-size: 25px;
 font-family: 'AR One Sans', sans-serif;
 margin-top: 30px;
 margin-bottom: 50px;
 font-weight: 550;
`;

export const InformationAdd = styled.span`
  color:gray;
  font-size: 13px;
  font-family: 'AR One Sans', sans-serif;
  margin-top: 500px;
  margin-bottom: 50px;
  font-weight: 100;
  position: fixed;
  
`;

export const ContainerChat = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(${BackgroundChat});
  overflow: auto;
`;

export const ContainerChatVerify = styled.div`
  width: 70%;
  background-color: #fff;
`;

export const BackGroundChat = styled.div`
  background-color:#F0F2F5;
  height: 71px;
  width: 70%;
  top: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: absolute;
  border-left: 1px solid #6c8a82;
`;

export const ChatArea = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  box-sizing: border-box;


  .MyUserMessage{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 2px 0;
    justify-content: flex-end;
  }

  .OtherUserMessage{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 2px 0;
    justify-content: flex-start;
  }

  .MyMessage{
    background-color: #6BFFB3;
    padding: 10px;
    border-radius: 5px;
  }
  .OtherMessage{
    background-color: #F7F7F7;
    padding: 10px;
    border-radius: 5px;
  }
  .Myname{
    color: #417DFF;
    font-size: 19px;
  }
  .Othername{
    color: #DBA530;
    font-size: 19px;
  }
`;

export const UserNames = styled.div`
 display: flex;
 color: #6c8a82;
`;


export const RoomName = styled.span`
 color:#000;
 font-size: 21px;
`;

export const InitiRoomName = styled.span`
 color:black;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 30px;
 height: 30px;
 box-sizing: border-box;
 font-size: 23px;
 margin:30px;
 border: 1px solid black;
 border-radius: 50%;
`;

export const UserJoinRoom = styled.div`
  width: 230px;
  height: 25px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #FCFCFC;
  border-bottom: 1px solid #A8A8A8 ;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const MessageJoinUserRoom = styled.span`
 color:#636363;
 font-size: 15px;
`;

export const AreaSendMessage = styled.div`
  width: 70%;
  height: 50px;
  background-color: #F5F7FA;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;

`;

export const MessageInput = styled.input`
  width: 85%;
  height: 30px;
  border-radius: 5px;
  background-color: #FFF;
  border: none;
  padding: 5px 20px 5px 20px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`;

export const MessageButtonSend = styled.img`
  width: 29px;
  height: 29px;
  cursor: pointer;
`;

