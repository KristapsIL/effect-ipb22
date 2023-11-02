import {useEffect,useState} from "react"

function Comment(props){
    const [comment,setComment]= useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getcomment(){
            const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
            const data = await response.json();
            setComment(data);
            setLoading(false)
        }
        getcomment();
    },[])
    return(
        <>
        {loading?<p>Loading</p>:[<p>postId:{comment.postId}</p>,
            <p>id:{comment.id}</p>,
            <p>name:{comment.name}</p>,
            <p>email:{comment.email}</p>,
            <p>body:{comment.body}</p>
        ]}
        </>
    )
}
export default Comment;