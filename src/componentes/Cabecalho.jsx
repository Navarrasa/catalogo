import estilos from './cabecalho.module.css';
import logo from '../assets/logo.png';

export function Cabecalho() {
    return (
        <header className={estilos.cabecalho}>
            <img  className={estilos.logo} src={logo} alt="Logo do Website" />
            <h1>Bruflix</h1>
        </header>
    );
}