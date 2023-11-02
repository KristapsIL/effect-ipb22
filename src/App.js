import {useState, useEffect} from "react";
import Comment from "./Comment";

import Todo from "./Todo";

function App() {
  const [toDo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getTodo(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
      const data = await response.json();
      setTodo(data);
      setLoading(false);
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
    <Comment/>
    {loading ?<p>Loading...</p>: <Todo {...toDo}/>}
    </>
  );
}

export default App;
