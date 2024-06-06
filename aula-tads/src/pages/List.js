import { useNavigate } from "react-router-dom";

const List = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Bandas:</p>
            <p>Santos</p>
            <p>Palmeiras</p>
            <p>Corinthians</p>
            <p>São Paulo</p>
            <p>Flamengo</p>
            <p>Botafogo</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}

export default List;