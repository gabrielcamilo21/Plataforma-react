import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario() {
//
    // useParams é uma função que retorna um objeto.
    // Este objeto contêm os parametros passados pela rota
    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

    let navigate = useNavigate();
    function editar(){
        //capturar as informações do formulario
        //validar os dados de entrada
        //modificar as informções no banco de dados

        navigate("/usuario")
    }

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={editar} variant="dark">Editar</Button>
        </div>
    )
}
