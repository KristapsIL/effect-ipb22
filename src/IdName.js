import {useState,useEffect} from "react";
function IdName(props){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function getname(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        };
        getname();
    },[])

    return(
        <>
        {loading ?"" :users[props.theNumber].name };
        </>
    )
}
export default IdName;