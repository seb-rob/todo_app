import { useState } from "react";
import { apiRequest } from "./request";

function TodoInput() {
    const [text, setText] = useState("");

    const submitHandler = async (e) => {
      e.preventDefault();
      // const res = await apiRequest("GET", "/")
      // console.log(res);
    }
    
    return(
        <form className="input-group mb-3" onSubmit={submitHandler}>
          <input 
            type="text"
            className="form-control"
            placeholder="My next goal.." 
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
            <button 
                className="btn btn-outline-success" 
                type="submit" 
                id="button-addon2"
            >
              Button
            </button>
        </form>
    )
}

export default TodoInput;