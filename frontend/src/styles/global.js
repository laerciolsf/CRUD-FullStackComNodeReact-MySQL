// Importando o módulo 'createGlobalStyle' do 'styled-components' para criar estilos globais
import { createGlobalStyle } from "styled-components";

// Definindo estilos globais utilizando 'createGlobalStyle'
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif; /* Definindo uma fonte padrão para todo o documento */
  }
  
  body {
    width: 100vw; /* Definindo a largura do corpo como 100% da largura da viewport */
    height: 100vh; /* Definindo a altura do corpo como 100% da altura da viewport */
    display: flex; /* Usando flexbox para centralizar o conteúdo verticalmente */
    justify-content: center; /* Centralizando o conteúdo horizontalmente */
    background-color: #f2f2f2; /* Definindo a cor de fundo do corpo */
  }
`;

// Exportando o estilo global 'Global' para uso em outros componentes React
export default Global;
