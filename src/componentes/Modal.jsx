import estilos from "./Modal.module.css";

export function Modal({ movie, onClose }){
    if(!movie){
        return null;
    }
    console.log(movie);
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.modalHeader}>
                    <button onClick={onClose}>x</button>
                    <div className={estilos.titleimage}>
                        <h2>{movie.title}</h2>
                        <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    </div>
                    <div className={estilos.movieDetails}>
                        <ul className={estilos.ulDetails}>
                            <li>Sumário</li>
                            <li>{`${movie.overview}`}</li>
                        </ul>
                        <ul className={estilos.ulDetails}>
                            <li>{`Popularidade : ${movie.popularity}`}</li>
                            <li>{`Data de lançamento do filme: ${movie.release}`}</li>
                            <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )



}