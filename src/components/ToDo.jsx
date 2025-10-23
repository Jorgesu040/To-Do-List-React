import '../styles/Todo.css'
import { CircleX } from 'lucide-react'

function ToDo({ id, completed, completeToDo, deleteToDo, children }) {

    const computedClass = 'todo-container' + (completed ? ' completed' : '')

    const handleDelete = (event) => {
        event.currentTarget.closest('.todo-container').classList.add('removing')
        setTimeout(() => deleteToDo(id), 500)
    }

    return (
        <div className={computedClass} id={id}>
            <div
                className="todo-text"
                onClick={() => completeToDo(id)}>
                {children}
            </div>
            <div
                className="todo-icon-container"
                onClick={handleDelete}>
                <CircleX className="todo-icon" />
            </div>
        </div >
    )
}

export default ToDo