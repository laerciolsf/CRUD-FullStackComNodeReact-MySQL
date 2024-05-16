// Importando o estilo global definido em './styles/global.js'
import GlobalStyle from "./styles/global";

// Importando o módulo 'styled-components' para estilização de componentes
import styled from "styled-components";

// Importando o componente 'Form' definido em './components/Form.js'
import Form from "./components/Form.js";

// Importando o componente 'Grid' definido em './components/Grid.js'
import Grid from "./components/Grid";

// Importando 'useEffect' e 'useState' do React para gerenciar efeitos colaterais e estado
import { useEffect, useState } from "react";

// Importando componentes de notificação 'toast' e 'ToastContainer' do 'react-toastify'
import { toast, ToastContainer } from "react-toastify";

// Importando estilos CSS padrão do 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

// Importando o módulo 'axios' para realizar requisições HTTP
import axios from "axios";

// Definindo estilos para o container principal utilizando 'styled-components'
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Estilizando o título principal utilizando 'styled-components'
const Title = styled.h2``;

// Componente funcional principal 'App'
function App() {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([]);

  // Estado para armazenar o usuário em modo de edição
  const [onEdit, setOnEdit] = useState(null);

  // Função assíncrona para obter a lista de usuários do servidor
  const getUsers = async () => {
    try {
      // Realizando uma requisição GET para obter os usuários do servidor
      const res = await axios.get("http://localhost:8800");

      // Ordenando os usuários pelo nome antes de atualizar o estado
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // Exibindo uma notificação de erro caso ocorra um problema na requisição
      toast.error(error);
    }
  };

  // Efeito para buscar os usuários ao carregar a página ou sempre que o estado de 'setUsers' mudar
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  // Renderização do componente 'App'
  return (
    <>
      {/* Container principal para os elementos da aplicação */}
      <Container>
        {/* Título da aplicação */}
        <Title>USUÁRIOS</Title>

        {/* Componente 'Form' para adição e edição de usuários */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />

        {/* Componente 'Grid' para exibição da lista de usuários */}
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>

      {/* Componente 'ToastContainer' para exibir notificações na interface */}
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      {/* Estilo global para a aplicação */}
      <GlobalStyle />
    </>
  );
}

// Exportando o componente 'App' para ser utilizado na renderização do React
export default App;
