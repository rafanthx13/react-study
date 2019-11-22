import React, { Component } from 'react'

export default class Grid extends Component {
  
  // Essa funçâo serve para passarmos número e isso ser convrtido
  //  EM uma tag de cols do BootStrap
  /// Isso serve para enonomiza
  // EM vez de fazer div e umonete de clase você pode usar esse componente
  // Para economiza tempo Assim, vocÊ só passa números
  // Exemplo: <Grid cols='12 9 10'>
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if(cols[0]) classes += `col-xs-${cols[0]}`
    if(cols[1]) classes += ` col-sm-${cols[1]}`
    if(cols[2]) classes += ` col-md-${cols[2]}`
    if(cols[3]) classes += ` col-lg-${cols[3]}`

    return classes 
}

// Ira retonrar a div com essa classes
// Esse componente poderia ser um compoennte de funçâo, já que nâo gerencia estado
render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)
    return (
        <div className={gridClasses}>
            {this.props.children}
        </div>
    )
}
}