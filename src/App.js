import React from 'react';
import logo from './logo.svg';
import Conversor from "./Conversor"
function App() {
  return (
    <div className="Aapp">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
