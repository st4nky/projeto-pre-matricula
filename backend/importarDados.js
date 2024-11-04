const mysql = require('mysql2');
const axios = require('axios');

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'situacao'
});

// URLs da API
const alunosUrl = 'https://siga04.activesoft.com.br/api/v0/lista_alunos/?periodo_sigla=2025';
const turmasUrl = 'https://siga04.activesoft.com.br/api/v0/enturmacao_com_detalhes/?periodo=2025';

// Função para buscar dados da API
async function fetchData(url) {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer P9D1pYmZcjDl6Zw6gQoHQ7ZXbvZ2I1',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar dados de ${url}:`, error);
        return null;
    }
}

// Função para processar e inserir dados no MySQL
async function importarDados() {
    const alunos = await fetchData(alunosUrl);
    const turmas = await fetchData(turmasUrl);

    if (!alunos || !turmas) {
        console.error("Erro ao buscar dados da API.");
        return;
    }

    // Limpar a tabela antes de inserir novos dados
    db.query("TRUNCATE TABLE alunos", (err) => {
        if (err) throw err;
    });

    alunos.forEach(aluno => {
        const turma = turmas.find(t => t.aluno_id === aluno.id);
        if (turma && turma.situacao_aluno_turma === 'Pré-matrícula paga') {
            const nome = aluno.nome;
            const situacao = turma.situacao_aluno_turma;
            const nomeTurma = turma.nome_turma_completo;
            const unidade = turma.unidade_id;

            // Inserir aluno na tabela MySQL
            const query = `INSERT INTO alunos (nome, situacao, nome_turma, unidade) VALUES (?, ?, ?, ?)`;
            db.query(query, [nome, situacao, nomeTurma, unidade], (err) => {
                if (err) console.error("Erro ao inserir aluno:", err);
            });
        }
    });

    console.log("Dados importados com sucesso!");
    db.end();
}

// Executa a importação de dados
importarDados();
