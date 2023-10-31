import {useState, useEffect} from "react";

import Todo from "./Todo";

function App() {
  const [toDo, setTodo] = useState({});
  useEffect(()=>{
    async function getTodo(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
      const data = await response.json();
      setTodo(data);
    }
    getTodo();
  },[])

  // const toDo = {
  //   userId: 1,
  //   id:1,
  //   title:"delectus",
  //   completed: true,
  // }


  return (
    <>
    <Todo {...toDo}/>
    </>
  );
}

export default App;
