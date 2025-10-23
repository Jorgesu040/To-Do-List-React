import './App.css'
import ListToDo from './components/ListToDo'
import LogoUrl from './components/Logo'

function App() {
  return (
    <div className='todo-app-container'>
      <LogoUrl></LogoUrl>
      <ListToDo></ListToDo>
    </div>
  )
}

export default App
