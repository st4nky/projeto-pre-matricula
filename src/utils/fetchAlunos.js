async function fetchAlunos() {
    try {
        const response = await fetch('http://localhost:3000/api/alunos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Processar os dados
    } catch (error) {
        console.error("Erro ao buscar alunos:", error);
    }
}
