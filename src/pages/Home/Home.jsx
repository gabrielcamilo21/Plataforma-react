import { Link, Outlet } from "react-router-dom"


export function Home(){
    return(
        <div className="home">
            <h1>Home</h1>
            <ul>
            <li>
                <Link to="section1">Seçao 1</Link>
            </li>
            <li>
                <Link to="section2">Seçao 2</Link>
            </li>
            <li>
                <Link to="section3">Seçao 3</Link>
            </li>
         </ul>

            <Outlet/>
        </div>
    )
}