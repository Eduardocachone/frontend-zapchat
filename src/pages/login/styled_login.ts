import {styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400;500&family=Gabarito:wght@600&display=swap');

`;


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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom,  #fff, #F0F2F9);

`;

export const TitleChat = styled.span`
    font-size: 41px;
    font-weight: 600;
    font-family: 'AR One Sans', sans-serif;
    margin-bottom: 100px;

    /* white-space: nowrap;
    text-overflow: ellipsis; */
`;

export const ChatSpanRegister = styled.span`
    font-size: 31px;
    font-weight: 500;
    font-family: 'AR One Sans', sans-serif;
    margin-top: 30px;
`;

export const ChatInputRegister = styled.input`
    width: 450px;
    height: 40px;
    border: #BAFDC2 solid 2px;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 5px;
    margin-top: 20px;

    &:focus {
    outline: none;
  }
`;


export const SendButtonChat = styled.button`
    width: 250px;
    height: 45px;
    margin-top: 50px;
    background-color: #00755C;
    color: white;
    border: 1px solid #006952;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

&:hover {
    background-color: #004443;
  }
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;
