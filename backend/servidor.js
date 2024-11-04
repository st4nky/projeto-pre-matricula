const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha', // Altere conforme necessário
    database: 'situacao'
});

// Middleware para permitir requisições CORS (para conectar com o frontend React)
app.use(cors());

// Endpoint para obter os dados dos alunos
app.get('/api/alunos', (req, res) => {
    const query = 'SELECT nome, situacao, nome_turma, unidade FROM alunos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao consultar o MySQL:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.json(results);
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
