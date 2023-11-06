import IdName from "./IdName";
function Post(props){
    const idName = props.userId-1;
    return(
        <>
        <div key={props.index}>
            <p>Name:<IdName theNumber={idName}/></p>
            <p>id:{props.id}</p>
            <p>title:{props.title}</p>
            <p>body:{props.body}</p>
        </div>
        </>
    )
}
export default Post;