
import React,{useState} from 'react';
import TodoForm from './TodoForm';


     const Todo = ({todos,removTodo,updatedTodo}) => {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    })
    const submitUpdate = (value) =>{
    updatedTodo(edit.id,value)
    setEdit({
        id:null,
        value :""
    })
}
if (edit.id) {
    return  <TodoForm edit = {edit} onSubmit = {submitUpdate} />
}
    return todos.map((todo) => (
        <div  key={todo.id}>
      

      <div> {todo.text} </div>
     <div className='icons'>
        <button className='delete' onClick={() =>removTodo(todo.id)}>X</button>
        <button className='edit' onClick={() =>setEdit({id:todo.id, value:todo.text})}>Edit</button>
     </div>

        </div>
    ))
}
 
export default Todo; 