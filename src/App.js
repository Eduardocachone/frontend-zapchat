// Componente App
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Chats from './pages/chats/chats';
import MeuComponente from './pages/teste/teste';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const handleLogin = (name, number) => {
    setLoggedIn(true);
    setUserName(name);
    setUserNumber(number);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/chats"
          element={<Chats userName={userName} userNumber={userNumber} />}
        />
        <Route
          path="/teste"
          element={<MeuComponente/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
