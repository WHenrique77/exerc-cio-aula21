import React, { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

const TemaExibicao = () => {
  const { tema } = useContext(TemaContext);
  return <h1>O tema atual é: {tema}</h1>;
};

const AlternarTemaButton = () => {
  const { alternarTema } = useContext(TemaContext);
  return <button onClick={alternarTema}>Alternar Tema</button>;
};

const App = () => {
  return (
    <TemaProvider>
      <TemaExibicao />
      <AlternarTemaButton />
    </TemaProvider>
  );
};

export default App;