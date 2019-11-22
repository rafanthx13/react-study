import React from 'react'
import './Button.css'

export default props => {

    // classes: recebera as devidas classes de css
    // de acordo com as props que vinherem
    // Pode receber mais de uma
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    // No 
    return (
        <button 
          onClick={e => props.click && props.click(props.label)}
          className={classes}
        >
          {props.label}
        </button>
    )
}