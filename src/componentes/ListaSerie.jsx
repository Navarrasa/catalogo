import axios from "axios";
import React, { useState, useEffect} from "react";
import { CardSerie } from './CardSerie';
import { ModalSerie } from './ModalSerie';
import estilo from './ListaSerie.module.css';

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function ListaSerie() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
 
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-br`)
        .then(Response=>{
            console.log(Response.data.results);
            setSeries(Response.data.results);
        })
        .catch(error => {
            console.log("erro", error);
        }); 
        
    },[]);

        const handleOpenModal = (series) => {
            setSelectedSerie(series);
        }

        const handleCloseModal = () => {
            setSelectedSerie(null);
        }

    return(
        <>
        <div className={estilo.titulo}>
            <h1>Series</h1>
            <p>As melhores series para você assistir</p>
        </div>
        <div className={estilo.conteiner}>
            <figure className={estilo.posters}>
                {series.map(serie => (
                    <CardSerie 
                    key={serie.id} 
                    serie={serie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {selectedSerie &&(<ModalSerie serie={selectedSerie} onClose={handleCloseModal}/>)}
        </div>
        </>
    );
}