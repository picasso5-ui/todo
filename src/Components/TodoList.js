import React,{ useEffect, useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'



    const TodoList = ({todos,setTodos}) => {

   




    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [ todo, ...todos ]
        const doc = {
            todo: newTodos,
        }
        localStorage.setItem('todo', JSON.stringify(doc));
        setTodos(newTodos)
        
    }
    const updatedTodo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev=>prev.map(item =>(item.id===todoId ? newValue :item)))
    }


    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(filt =>filt.id !== id)
        setTodos(removeArr);
    }

//LOCALE STORAGE .........//////////////




   /* const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }*/

    return ( 
        <div>
      <h1>whats the plan for today</h1>
      <TodoForm onSubmit = {addTodo}/>
      <Todo 
      todos={todos}
     // completeTodo={completeTodo}

      removTodo = {removeTodo}

      updatedTodo = {updatedTodo}
      />
        </div>
     );
}
 
export default TodoList;