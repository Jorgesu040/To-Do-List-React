import FormToDo from "./FormToDo"
import { useState, useEffect } from "react"
import ToDo from "./ToDo"
import TodoCounter from "./TodoCounter"
import '../styles/ListToDo.css'

function ListToDo() {

    const [tasks, setTasks] = useState(() => {
        // Cargar tareas desde localStorage al inicializar
        const savedTasks = localStorage.getItem('todos')
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    // Guardar tareas en localStorage cada vez que cambien 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (task) => {
        //trim() quita los espacios del principio y final.
        if (task.text.trim()) {
            task.text = task.text.trim()
            setTasks([task, ...tasks])
        }    
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const completeTask = (id) => {
        setTasks(tasks.map(task => {
            return task.id === id ? {...task, completed: !task.completed} : task
        }))
    }

    return (

        <div className='list-todo-container'>
            <FormToDo onSubmit={addTask} />
            <TodoCounter tasks={tasks} />
            {
                tasks.map(task =>
                    <ToDo
                        key={task.id}
                        id={task.id}
                        completed={task.completed}
                        completeToDo={completeTask}
                        deleteToDo={deleteTask}
                    >{task.text}</ToDo>
                )
            }
            

        </div>

    )

}

export default ListToDo