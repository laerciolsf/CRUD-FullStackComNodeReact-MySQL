// Importando o módulo 'mysql' para interação com o banco de dados MySQL
import mysql from "mysql";

// Criando uma conexão com o banco de dados MySQL utilizando as credenciais fornecidas
export const db = mysql.createConnection({
    host: "localhost", // Endereço do servidor do banco de dados
    user: "root", // Nome de usuário do banco de dados
    password: "familia", // Senha do banco de dados
    database: "crud" // Nome do banco de dados a ser utilizado
});
