import estilos from "./ModalSerie.module.css";

export function ModalSerie({ serie, onClose }){
    if(!serie){
        return null;
    }
    console.log(serie);
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.modalHeader}>
                    <button onClick={onClose}>x</button>
                    <div className={estilos.titleimage}>
                        <h2>{serie.title}</h2>
                        <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
                    </div>
                    <div className={estilos.movieDetails}>
                        <ul className={estilos.ulDetails}>
                            <li>Sumário</li>
                            <li>{`${serie.overview}`}</li>
                        </ul>
                        <ul className={estilos.ulDetails}>
                            <li>{`Popularidade : ${serie.popularity}`}</li>
                            <li>{`Data de lançamento do filme: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}