import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    idade: 26
}

const MyUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    // UseEffect que vai ser executado quando o componente for montado
    useEffect(() => {
        // simulação de espera pela resposta do backend
        setTimeout(() => {
            setUser(profile);
        }, 3000);
    }, []);

    return (
        <div className="container">
            <Link to="/profile">Meu perfil</Link>
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                    <h4>{user.idade}</h4>
                    <button onClick={() => navigate(-1)}>Voltar</button>
                </div>
            ) : (
                <div>Carregando...</div>
            )}
        </div>
    );

}

export default MyUser;