import {useState,useEffect} from "react"

function PostList(){
    useEffect(()=>{
        async function getposts(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data)
        }
        getposts()
    },[])

    return(
        <>

        </>
    )
}
export default PostList;