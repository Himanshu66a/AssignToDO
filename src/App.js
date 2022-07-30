import Todo from './components/todo'
import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Header'
import Header from './components/Header';
import NewTask from './components/NewTask';
import Alltask from './components/Alltask';
import SingleTask from './components/SingleTask';

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setusers(data))
      .catch((err) => console.log(err))
    console.log(users)
  }



  const onAdd = async (task) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({

        title: task,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // .then((res) => {
      //   if (res.status !== 201) {
      //     return;
      //   } else {
      //     return res.json();
      //   }
      // })
      .then(response => response.json())
      .then((data) => {
        setusers((users) => [...users, data]);

      })
      .catch((err) => {
        console.log(err);
      });
  };





  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setusers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const reverse = users.reverse();







  return (
    <div className="App">
      {/* <Todo/> */}
      <Header />
      <NewTask onAdd={onAdd} />
      <Alltask />
      <div className='task-container'>
        {
          reverse.map((user, ind) => {
            if (ind <= 50)
              return (
                <SingleTask user={user} onDelete={onDelete} />
              )
          })
        }

{/* {
      users.reduceRight((_, user) => {
        return(
          <SingleTask user={user} onDelete={onDelete} />
        )
        
      })
    } */}

      </div>
   
 
    </div>
  );
}

export default App;
