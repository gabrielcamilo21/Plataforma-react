import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Menu } from './components/Menu/Menu';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound} from "./pages/NotFound/NotFound"
import { Root } from './pages/Root/Root';
import { Section1 } from './components/Section/Section1';
import { Section2 } from './components/Section/Section2';
import { Section3 } from './components/Section/Section3';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/*ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios".*/}
        <Route path='/' element={<Root/>}>
        <Route path='/'element={<Home/>} >
          <Route path='section1' element={<Section1/>}/>   
          <Route path='section2' element={<Section2/>}/>   
          <Route path='section3' element={<Section3/>}/>   
        </Route>
        <Route path="/blog" element={<Blog/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path="/usuario" element={<Usuarios/>} />
        <Route path="/usuario/edit/:id" element={<EditaUsuario />}/> {/* :id -> parametro de rota*/}
        <Route path="/login" element={<Login />} />
        <Route path="/usuario/perfil/:id" element={<Perfil/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
