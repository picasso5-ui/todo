import React,{useState,useEffect,useRef} from 'react'

const TodoForm = (props) => {
 const [input,setInput] = useState('');
 const inputRef = useRef(null)
 useEffect(() =>{
    inputRef.current.focus()
    
 })








 const handleChange = e =>{
    setInput(e.target.value)
 }


 const handleSubmit = e =>{
    e.preventDefault();


    props.onSubmit({
        id : Math.floor(Math.random() * 10000),
        text :input
    });
   setInput('')
   
 };


    return ( 
    <div className="Form-parent">
      <form className='Todo-form' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Add todo'
        value={input}
        name="text"
        className='Todo-input'
        onChange={handleChange}
        ref ={inputRef}
    />
    <button className='Todo-btn'>Add Todo</button>
      </form>
    </div>
     );
}
 
export default TodoForm;