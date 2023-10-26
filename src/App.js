import Todo from "./Todo";
function App() {
  const todos = [{
    userId: 1,
    id:1,
    title:"delectus",
    completed: false,
  }];
  const todoJSX = todos.map((doom, index)=>{
    <Todo/>
  });
  return (
    <>
    <h1>Hi</h1>
    <Todo/>
    </>
  );
}

export default App;
