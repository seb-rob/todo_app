import AccList from "./AccList";
import TodoList from "./TodoList";

function Lists(){
    return(
        <div className="mt-5 d-flex flex-row justify-content-between">
          <TodoList />
          <AccList />
        </div>
    )
}

export default Lists;