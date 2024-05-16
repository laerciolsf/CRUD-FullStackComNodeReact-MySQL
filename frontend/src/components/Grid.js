// Importando o módulo 'React' para criação de componentes
import React from "react";

// Importando o módulo 'axios' para realizar requisições HTTP
import axios from "axios";

// Importando o módulo 'styled-components' para estilização de componentes
import styled from "styled-components";

// Importando ícones de exclusão e edição do 'react-icons/fa'
import { FaTrash, FaEdit } from "react-icons/fa";

// Importando o componente 'toast' do 'react-toastify' para exibir notificações na interface do usuário
import { toast } from "react-toastify";

// Definindo estilos para a tabela utilizando 'styled-components'
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

// Estilização para o cabeçalho da tabela
export const Thead = styled.thead``;

// Estilização para o corpo da tabela
export const Tbody = styled.tbody``;

// Estilização para linhas da tabela
export const Tr = styled.tr``;

// Estilização para células de cabeçalho da tabela
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Estilização para células de dados da tabela
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Componente funcional Grid para renderizar a tabela de usuários
const Grid = ({ users, setUsers, setOnEdit }) => {
  // Função para manipular a edição de um usuário
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  // Função para manipular a exclusão de um usuário
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  // Renderização da tabela de usuários
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

// Exportando o componente 'Grid' para uso em outros componentes React
export default Grid;
