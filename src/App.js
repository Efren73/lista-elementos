import React from 'react';
import './App.css';
function App() {
  let result = {
    status: 200,
    statusText: "Success",
    data: [
      { details: "dulce", name: "Tamal de dulce", price: "$12.00" },
      { details: "picante", name: "Tamal verde", price: "$10.00" },
      { details: "picante", name: "Tamal rojo", price: "$10.50" },
      { details: "picante", name: "Tamal de rajas", price: "$11.00" }
    ]
  };

  return (
    <body>
      <h1>Tamalitos</h1>
      <div class="tamalitos">
        <ul class="tamales">
            <li class="encabezado">{result.data[0].name}</li>
            <li class="precio">{result.data[0].price}</li>
            <li class="sabordulce" >{result.data[0].details}</li>
        </ul>
        <ul class="tamales">
            <li class="encabezado">{result.data[1].name}</li>
            <li class="precio">{result.data[1].price}</li>
            <li class="saborpicante" >{result.data[1].details}</li>
        </ul>
        <ul class="tamales">
            <li class="encabezado">{result.data[2].name}</li>
            <li class="precio">{result.data[2].price}</li>
            <li class="saborpicante" >{result.data[2].details}</li>
        </ul>
        <ul class="tamales">
            <li class="encabezado">{result.data[3].name}</li>
            <li class="precio">{result.data[3].price}</li>
            <li class="saborpicante" >{result.data[3].details}</li>
        </ul>
      </div>
    </body>
  );
}

export default App;
