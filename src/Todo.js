import {useState} from "react";
function Todo(props){
    const [check, setCheck]= useState(props.completed)
    return(
    <>
        <p>userId:{props.userId}</p>
        <p>id: {props.id}</p>
        <p>title: {props.title}</p>
        <input type="checkbox" checked={check} onChange={(event)=>setCheck(event.target.checked)}></input>
    </>
    );
}
export default Todo;