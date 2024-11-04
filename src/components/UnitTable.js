import React from 'react';
import './UnitTable.css';

const unidades = {
    1: "PRATA/RJ",
    2: "SÃO GONÇALO/RJ",
    3: "ALCÂNTARA/RJ",
    4: "ARARUAMA/RJ",
    5: "BELFORD ROXO/RJ",
    6: "CABO FRIO/RJ",
    7: "ICARAÍ/RJ",
    8: "MARICÁ 1/RJ",
    9: "OLARIA/RJ",
    10: "NITERÓI/RJ",
    13: "DUQUE DE CAXIAS/RJ",
    14: "ITAIPU/RJ",
    15: "MADUREIRA/RJ",
    16: "NILÓPOLIS/RJ",
    17: "NOVA IGUAÇU/RJ",
    18: "MARICÁ 2/RJ",
    19: "QUEIMADOS/RJ",
    22: "VILAR DOS TELES/RJ",
    25: "VILA ISABEL/RJ",
    26: "MEIER/RJ",
    27: "ILHA 1/RJ",
    29: "ITABORAI/RJ",
    31: "FRIBURGO/RJ",
    33: "ITAIPUAÇU/RJ",
    34: "SEROPÉDICA/RJ"
};

function UnitTable({ alunos }) {
    return (
        <table id="resultados">
            <thead>
                <tr>
                    <th>Nome do Aluno</th>
                    <th>Situação</th>
                    <th>Nome da Turma</th>
                    <th>Unidade</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno, index) => (
                    <tr key={index}>
                        <td>{aluno.nome}</td>
                        <td>{aluno.situacao}</td>
                        <td>{aluno.nome_turma}</td>
                        <td>{unidades[aluno.unidade]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UnitTable;
