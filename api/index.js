// Importando o módulo 'express' para criação de um aplicativo Express
import express from "express";

// Importando as rotas de usuário definidas no arquivo './routes/users.js'
import userRoutes from "./routes/users.js";

// Importando o módulo 'cors' para permitir requisições de diferentes origens
import cors from "cors";

// Criando uma instância do aplicativo Express
const app = express();

// Utilizando o middleware para permitir que o aplicativo interprete corpos de requisição no formato JSON
app.use(express.json());

// Utilizando o middleware 'cors' para habilitar o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Utilizando as rotas de usuário definidas em './routes/users.js' para lidar com as requisições
app.use("/", userRoutes);

// Iniciando o servidor na porta 8800
app.listen(8800);
