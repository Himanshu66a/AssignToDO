import React,{useState,useEffect} from "react";
import './todo.css';



const getlocal = () =>{
        const x = localStorage.getItem('list');
        if(x){
            console.log(x);
            return  JSON.parse(x);
        }
        else
        return [""]
       

}

const Todo = () =>{
const[inputdata,setdata]=  useState(' ');
const [context,setcontext] = useState([getlocal]);
const [items, setitems] = useState([]);

useEffect(() => {
//    const x = localStorage.getItem('Name');
//    if(x){
//     setcontext([... context, x]);
//    }

localStorage.setItem('list', JSON.stringify(context));
},[context])

   
const additem = ()=>{
    if(inputdata===' '){

    }
    else{
        setcontext([... context, inputdata]);
        setdata(' ')
    }
   
}

const delitem = (key) =>{
    const update = () => context.filter((ele,ind)=>{
        return key != ind;
    })
 
    setcontext(update);
}

    return(
    <>
        <div className="outer-container">
            <div className="inner-conatiner">
                <h2>Todo App</h2>
                    <input type="text" placeholder="add Item" 
                    value={inputdata}
                    onChange={ (e)=> setdata(e.target.value)}
                    />

                    <i className="fa-solid fa-plus btn"
                    onClick={additem} ></i>

                    <div className="items-list">
                       {
                           context.map((ele,ind) =>{
                            return(
                            <div className="items" key={ind}>
                                <span>{ele}</span>
                                <i className="fa-solid fa-trash del-btn btn"
                                onClick={() =>delitem(ind)}> </i>
                            </div>
                            )
                           })
                       } 
                    </div>

            </div>

        </div>

    </>
    )
}
export default Todo