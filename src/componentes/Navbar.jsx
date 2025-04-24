import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className={estilos.conteiner}>
      <ul>
        <li>
          <Link className={estilos.text_lines} to="/catalogo">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
        </li>
        <li>
          <Link className={estilos.text_lines} to="/catalogo/series">
            <span className="material-symbols-outlined">movie</span>
            Séries
          </Link>
        </li>
        <li>
          <Link className={estilos.text_lines} to="/catalogo/perfil">
            <span className="material-symbols-outlined">person</span>
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}