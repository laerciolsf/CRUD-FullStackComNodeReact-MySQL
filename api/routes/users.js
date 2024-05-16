// Importando o módulo 'express' para criação de rotas
import express from "express";

// Importando as funções controladoras de usuário para manipular as requisições HTTP
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

// Criando um objeto de roteador do Express
const router = express.Router();

// Definindo uma rota GET para obter todos os usuários
router.get("/", getUsers);

// Definindo uma rota POST para adicionar um novo usuário
router.post("/", addUser);

// Definindo uma rota PUT para atualizar um usuário existente com base no ID fornecido
router.put("/:id", updateUser);

// Definindo uma rota DELETE para deletar um usuário com base no ID fornecido
router.delete("/:id", deleteUser);

// Exportando o roteador para ser utilizado em outras partes do aplicativo
export default router;
