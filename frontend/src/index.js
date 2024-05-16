// Importando o módulo 'React' para criação de componentes
import React from 'react';

// Importando o módulo 'ReactDOM' para renderização de componentes React no navegador
import ReactDOM from 'react-dom';

// Importando o componente 'App' definido em './App.js'
import App from './App';

// Criando um novo root do ReactDOM utilizando 'ReactDOM.createRoot' e especificando o elemento onde a aplicação será renderizada
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente 'App' dentro do root do ReactDOM
root.render(
  // Utilizando o modo estrito ('StrictMode') do React para identificar e corrigir práticas inseguras ou desencorajadas
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
