import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    // Processa cada row colocando as devidas tags HTML e MetoodosDinamicos
    const renderRows = () => {
        const list = props.list || [] // se nâo houver lista ennuuma, entao, eu coloco como vazio

        // as funçôes 'handler' vem do componente principal 'todo'. UMa forma melhora seria usar o Redux
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done} 
                        onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done} 
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}