// Importando o objeto de banco de dados 'db' de um arquivo externo
import { db } from "../db.js";

// Função para obter todos os usuários do banco de dados
export const getUsers = (_, res) => {
  // Query SQL para selecionar todos os registros da tabela 'usuarios'
  const q = "SELECT * FROM usuarios";

  // Executando a consulta ao banco de dados
  db.query(q, (err, data) => {
    // Se ocorrer um erro, retorna o erro em formato JSON
    if (err) return res.json(err);

    // Se não houver erro, retorna os dados (usuários) em formato JSON com status 200 (OK)
    return res.status(200).json(data);
  });
};

// Função para adicionar um novo usuário ao banco de dados
export const addUser = (req, res) => {
  // Query SQL para inserir um novo registro na tabela 'usuarios'
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  // Valores a serem inseridos na tabela, obtidos a partir do corpo da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Executando a consulta de inserção no banco de dados
  db.query(q, [values], (err) => {
    // Se ocorrer um erro, retorna o erro em formato JSON
    if (err) return res.json(err);

    // Se não houver erro, retorna uma mensagem indicando que o usuário foi criado com sucesso
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

// Função para atualizar um usuário existente no banco de dados
export const updateUser = (req, res) => {
  // Query SQL para atualizar um registro na tabela 'usuarios'
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  // Valores a serem atualizados na tabela, obtidos a partir do corpo da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Adicionando o ID do usuário a ser atualizado aos valores
  const queryValues = [...values, req.params.id];

  // Executando a consulta de atualização no banco de dados
  db.query(q, queryValues, (err) => {
    // Se ocorrer um erro, retorna o erro em formato JSON
    if (err) return res.json(err);

    // Se não houver erro, retorna uma mensagem indicando que o usuário foi atualizado com sucesso
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

// Função para deletar um usuário do banco de dados
export const deleteUser = (req, res) => {
  // Query SQL para deletar um registro da tabela 'usuarios' com base no ID fornecido
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  // Executando a consulta de exclusão no banco de dados
  db.query(q, [req.params.id], (err) => {
    // Se ocorrer um erro, retorna o erro em formato JSON
    if (err) return res.json(err);

    // Se não houver erro, retorna uma mensagem indicando que o usuário foi deletado com sucesso
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
