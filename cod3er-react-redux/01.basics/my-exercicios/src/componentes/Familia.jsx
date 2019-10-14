// Familia.jsx

import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
  <div>
    {filhosComProps(props)}
     {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome })}
      */}
     {/*{React.Children.map(props.children, filho => {
          return React.cloneElement(filho, { ...props })
      })}
      */}
  </div>
