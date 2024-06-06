import "./Card.css";
import FrontCard from "./FrontCard";


const Card = () => {
    return (
        <div className="backCard">
            <FrontCard />
            <h2 className="segundoTitulo">Curso de Power BI</h2>
            <p className="preco">Promoção 250,00$</p>
        </div>
    );
}

export default Card;