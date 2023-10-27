import {useState} from "react";
function Todo(props){
    const [todo, setTodo] = useState(props.doos)
    return(
    <>
    <h2>Todo</h2>
    <label>
        {props.title}
    </label>
    <input type="checkbox" />
    </>
    )
}
export default Todo;