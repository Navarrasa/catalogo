import { Routes, Route } from 'react-router-dom';
import { Inicial } from '../Paginas/Inicial';
import { Perfil } from '../Paginas/Perfil';
import { Lista } from '../componentes/Lista';
import { ListaSerie } from '../componentes/ListaSerie';

export function Rotas() {
  return (
    <Routes>
      <Route path="/catalogo" element={<Inicial />}>
        <Route index element={<Lista />} /> {/* Rota padrão para /catalogo */}
        <Route path="perfil" element={<Perfil />} /> {/* /catalogo/perfil */}
        <Route path="series" element={<ListaSerie />} /> {/* /catalogo/series */}
      </Route>
    </Routes>
  );
}