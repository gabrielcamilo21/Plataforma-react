import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"
import { usuarios } from "../../data/usuarios";

export function Perfil(){

const params = useParams()
const id = params.id;

let usuario = usuarios.find(usuario =>{
    return usuario.id === parseInt(id)

})

let navigate = useNavigate()
function voltar(){

    navigate("/usuario")
}
    return(
        <div className="perfil">
            <h3>{usuario.nome}</h3>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={voltar} variant="dark">Voltar</Button>

        </div>
    )
}