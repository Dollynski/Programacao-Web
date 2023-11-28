import { useState } from "react";

function Avaliacao({ quantidadeEstrelas }) {
    const [nota, setNota] = useState(0);
    const [gaveta, setGaveta] = useState([]);
    const [notaTemporaria, setNotaTemporaria] = useState(0);

    const estrelas = Array.from({ length: quantidadeEstrelas }, (_, i) => (
        <Estrela
            key={i}
            darNota={() => handleDarNota(i + 1)}
            preencherEstrela={notaTemporaria ? notaTemporaria >= i + 1 : nota >= i + 1}
            notaTemp={() => setNotaTemporaria(i + 1)}
            resetarNotaTemporaria={() => setNotaTemporaria(0)}
        />
    ));

    const handleDarNota = (nota) => {
        setNota(nota);
        setGaveta((prevGaveta) => [...prevGaveta, nota]);
    };

    return <div>{estrelas}</div>;
}

function Estrela({ darNota, preencherEstrela, notaTemp, resetarNotaTemporaria }) {
    return (
        <span
            onClick={darNota}
            onMouseEnter={notaTemp}
            onMouseLeave={resetarNotaTemporaria}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={preencherEstrela ? "orange" : "white"}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke="orange"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976
                2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1
                1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0
                00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
        </span>
    );
}

export default Avaliacao;