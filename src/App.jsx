import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Rotas } from "./Rota/Rotas";
//estrutura básica para usar o react é através das funções
function App() {

  //para trazer o resultado da função eu coloco o que eu quero no Return que deve ter apenas 1 componente
  return (
    
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>

  );
}

export default App
