import '../styles/TodoCounter.css'

/* Componente que he creado para contar las tareas totales, completadas y pendientes */

function TodoCounter({ tasks }) {
    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length
    const todo = total - completed

    return (
        <div className="todo-counter">
            <div className="counter-item">
                <span className="counter-label">Total</span>
                <span className="counter-value">{total}</span>
            </div>
            <div className="counter-item">
                <span className="counter-label">Completadas</span>
                <span className="counter-value completed">{completed}</span>
            </div>
            <div className="counter-item">
                <span className="counter-label">Pendientes</span>
                <span className="counter-value pending">{todo}</span>
            </div>
        </div>
    )

}


export default TodoCounter