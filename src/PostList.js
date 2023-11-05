import {useState,useEffect} from "react";
import Post from "./Post";

function PostList(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] =  useState(true)
    useEffect(()=>{
        async function getposts(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data)
            console.log(data)
            setLoading(false);
        }
        getposts()
    },[])
        const postJSX = posts.map((thepost, index )=>{
        return (<Post key={index} {...thepost}/>)
        })

    return(
        <>
        {loading?"Loading...":postJSX}
        </>
    )
}
export default PostList;