interface NextArrowProps {
    className?: string;
    onClick?: () => void;
}

export default function Arrow({ className, onClick }: NextArrowProps) {
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

const styles = `
.slick-prev::before,
.slick-next::before {
    font-size: 40px; /* Aumenta o tamanho da seta */
    color: black; /* Altera a cor da seta */
}

.slick-prev,
.slick-next {
    z-index: 10; /* Garante que as setas fiquem acima */
    position: absolute; /* Mantém a posição controlada */
}
`;

// Adicionando estilos no <head> para garantir aplicação dinâmica
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
