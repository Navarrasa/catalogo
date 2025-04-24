import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <Link className={estilos.text_lines} to='/'>
                    <li>
                         <span className="material-symbols-outlined">home</span>
                         Home
                     </li>
                 </Link>
                 <Link className={estilos.text_lines} to='series'>
                     <li>
                         <span className="material-symbols-outlined">movie</span>
                         Séries
                     </li>
                 </Link>
                 <Link className={estilos.text_lines} to='perfil'>
                     <li>
                         <span className="material-symbols-outlined">person</span>
                         Perfil
                     </li>
                 </Link>
             </ul>
         </nav>
    );
}