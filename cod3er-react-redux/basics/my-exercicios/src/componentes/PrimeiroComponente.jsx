import React from 'react'

/*
Existe dois tipos de componentes
+ COmpoentens baseados em funçâo
+ COMpoentnes baseados em classe
*/

export default (props) =>
	<div>
		<h1>{props.valor}</h1>
	</div>
/* Nesse caso, vai pegar o índice valor da prop que será passada */

// function primeiro() {
//   return <h1>Primeiro Componente</h1>
// }

/*
// Arrow Function
export default () =>
  <div>
    <h1>.</h1>
  </div>

*/

// Poderia ser
// export default function() {
//   return <h1>Primeiro Componente</h1>
// }


// export default primeiro
