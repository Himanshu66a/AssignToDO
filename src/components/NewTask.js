import React,{useState} from 'react'
import '../App.css'



function NewTask({onAdd}) {
const [task, settask] = useState();

const handleOnSubmit = (e) => {
   e.preventDefault();
  onAdd(task)
  e.target.value = " ";
  e.target.value = " ";
}


  return (
    <div className='newTask'>
        <h3>Add a new task in the list</h3>
        
            <form className='inputArea' onSubmit={handleOnSubmit} >
                <input type="text" placeholder='Enter task here' value={task}
                onChange={
                  (e)=> settask(e.target.value)
                } />
                <button className='btn' type='submit'
                // onClick={()=>onAdd(task)} 
                >Submit</button>
            </form>
    </div>
  )
}

export default NewTask