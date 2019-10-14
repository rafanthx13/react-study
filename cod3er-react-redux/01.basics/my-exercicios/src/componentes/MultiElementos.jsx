import React from 'react'

// Solução 3
// Retornar como um Array
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// Solução 2
// React.Fragment permite 
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

// Solução 01. Mais usada!
//  Envolver os elementos em uma div
//  A desvantagem é que vai criar uma div a mais
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>
