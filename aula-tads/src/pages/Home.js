
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>
                <Link to="/profile">Meu perfil</Link>
            </div>
            <div>
                <Link to="/list">Abrir lista</Link>
            </div>
        </div>
    )
}

export default Home;