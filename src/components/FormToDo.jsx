import { useState } from 'react'
import '../styles/Form.css'
import { v4 as uuidv4 } from 'uuid'


function FormToDo({ onSubmit }) {

    const [input, setInput] = useState('')


    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSend = (content) => {
        content.preventDefault() //no recarga pág.
        const newTask = {
            //genera un id único llamando a uuidv4
            id: uuidv4(),
            text: input,
            completed: false
        }

        onSubmit(newTask)

        setInput('') // Limpiar el formulario
        
    }


    return (

        <form className='form-todo' onSubmit={handleSend}>
            <input
                onChange={handleChange}
                className='input-todo'
                type='text'
                value={input}
                placeholder="Escriba una tarea"
                name="text" />
            <button
                type='submit'
                className={input.trim() ? 'button-todo' : 'button-todo disabled'}>
                Añadir tarea
            </button>
        </form>
    )
}

export default FormToDo