// Importando o módulo 'axios' para realizar requisições HTTP
import axios from "axios";

// Importando componentes do React para criação de componentes funcionais e gerenciamento de efeitos colaterais
import React, { useEffect, useRef } from "react";

// Importando estilos estilizados com 'styled-components'
import styled from "styled-components";

// Importando o componente 'toast' do 'react-toastify' para exibir notificações na interface do usuário
import { toast } from "react-toastify";

// Definindo estilos para o formulário utilizando 'styled-components'
const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

// Área de entrada de dados estilizada
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

// Estilo para as entradas de texto
const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

// Estilo para rótulos
const Label = styled.label``;

// Estilo para botões
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

// Componente funcional do formulário
const Form = ({ getUsers, onEdit, setOnEdit }) => {
  // Referência para o formulário
  const ref = useRef();

  // Efeito para preencher os campos do formulário quando estiver em modo de edição
  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    // Verificando se todos os campos foram preenchidos
    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    // Se estiver em modo de edição, envia uma requisição PUT, caso contrário, envia uma requisição POST
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Limpa os campos do formulário após o envio
    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    // Reinicia o estado de edição e atualiza a lista de usuários
    setOnEdit(null);
    getUsers();
  };

  // Renderização do formulário
  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

// Exportando o componente 'Form' para uso em outros componentes React
export default Form;
