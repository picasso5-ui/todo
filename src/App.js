import TodoList from './Components/TodoList';
import {useEffect, useState} from 'react'

function App () {
   
    const [todos,setTodos]  = useState([])

    useEffect(() => {
        const getTodos = localStorage.getItem('todos') !== 'undefined' ? JSON.parse(localStorage.getItem('todos')) : localStorage.clear();
       console.log(getTodos)
    }, [])

    return(
        <div className="App">
            <TodoList  
            todos = {todos}
            setTodos = {setTodos}
            
            
            
            />

  
        </div>
    )
}


export default App;