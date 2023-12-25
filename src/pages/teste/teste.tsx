import React, { useState, useRef , useEffect} from 'react';
import './teste.css'; // Importe o arquivo de estilo (se necessário)

const Teste: React.FC = () => {
  const [inputAberto, setInputAberto] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && inputAberto) {
      inputRef.current.focus();
    }
  }, [inputAberto]);

  const handleToggleInput = () => {
    setInputAberto(!inputAberto);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}
        onClick={handleToggleInput}
      >
        Componente 1 (Não faz nada)
      </div>
      <div
        style={{ flex: 1, border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}
        onClick={handleToggleInput}
      >
        Componente 2 (Clique para abrir o input)
      </div>
      <input
        ref={inputRef}
        type="text"
        style={{
          flex: 1,
          border: '1px solid #ccc',
          padding: '10px',
          display: inputAberto ? 'block' : 'none',
        }}
      />
    </div>
  );
};

export default Teste;
