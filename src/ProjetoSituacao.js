import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SelectUnitButton from './components/SelectUnitButton';
import UnitTable from './components/UnitTable';
import './ProjetoSituacao.css';

function App() {
    const [alunos, setAlunos] = useState([]);
    const [unidadeSelecionada, setUnidadeSelecionada] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/alunos');
                if (!response.ok) throw new Error('Erro ao buscar alunos');
                const data = await response.json();
                setAlunos(data);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            } finally {
                // Após buscar os alunos, iniciar o timer para 1 segundo
                setLoading(true); // Garante que a tela de carregamento continue
                const timer = setTimeout(() => {
                    setLoading(false); // Muda o estado de loading para false após 1 segundo
                }, 1000);

                // Limpa o timer quando o componente for desmontado
                return () => clearTimeout(timer);
            }
        };

        fetchAlunos();
    }, []);

    const handleUnitSelect = (id) => {
        setUnidadeSelecionada(id);
    };

    const filteredAlunos = unidadeSelecionada
        ? alunos.filter(aluno => aluno.unidade === unidadeSelecionada)
        : alunos;

    return (
        <div className="container">
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <h1>Alunos em situação "Pré-matrícula paga"</h1>
                    <SelectUnitButton onSelect={handleUnitSelect} />
                    <UnitTable alunos={filteredAlunos} />
                </>
            )}
        </div>
    );
}

export default App;
