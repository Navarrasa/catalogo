import rodape_estilos from './rodape.module.css';

export function Rodape(){
    return(
        <footer className={rodape_estilos.rodape}>
            <p>&copy; devBruno</p>
            <p>Todos os direitos reservados - 2025</p>
        </footer>
    );
}