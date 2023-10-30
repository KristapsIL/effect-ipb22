import Todo from "./Todo";
function App() {
  const toDo = {
    userId: 1,
    id:1,
    title:"delectus",
    completed: true,
  };
  return (
    <>
    <Todo {...toDo}/>
    </>
  );
}

export default App;
