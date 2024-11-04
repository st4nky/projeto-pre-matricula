import React, { useState } from 'react';
import './SelectUnitButton.css';

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

function SelectUnitButton({ onSelect }) {
    const [showList, setShowList] = useState(false);

    const toggleUnitList = () => setShowList(!showList);

    return (
        <div className="select-container">
            <button id="selectUnitButton" onClick={toggleUnitList}>Selecione sua unidade</button>
            {showList && (
                <div id="unitList">
                    {Object.entries(unidades).map(([id, name]) => (
                        <button key={id} onClick={() => { onSelect(id); toggleUnitList(); }}>
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectUnitButton;
