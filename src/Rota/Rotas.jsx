import {Routes, Route} from 'react-router-dom';
import { Inicial } from '../Paginas/Inicial';
import { Perfil } from '../Paginas/Perfil';
import { Lista } from '../componentes/Lista';
import { ListaSerie } from '../componentes/ListaSerie';

export function Rotas(){
    return(
        <Routes>

            <Route path = '/' element = {<Inicial/>}>
                <Route index element = {<Lista/>}/>
                <Route path = 'perfil' element = {<Perfil/>}/>
                <Route path = 'series' element = {<ListaSerie/>}/> 
            </Route>

        </Routes>        
    );
}