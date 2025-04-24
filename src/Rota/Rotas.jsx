import {Routes, Route} from 'react-router-dom';
import { Inicial } from '../Paginas/Inicial';
import { Perfil } from '../Paginas/Perfil';
import { Lista } from '../componentes/Lista';
import { ListaSerie } from '../componentes/ListaSerie';

export function Rotas(){
    return(
        <Routes>

            <Route path = '/catalogo_de_filmes/' element = {<Inicial/>}>
                <Route index element = {<Lista/>}/>
                <Route path = '/catalogo_de_filmes/perfil/' element = {<Perfil/>}/>
                <Route path = '/catalogo_de_filmes/series/' element = {<ListaSerie/>}/> 
            </Route>

        </Routes>        
    );
}