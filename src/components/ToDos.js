import {React} from "react";
import Todo from "./Todo";
import Next7Days from "./Next7Days"

function ToDos(){
    return (
        <div className="ToDos">
            <Todo/>
            <Next7Days/>
        </div>
    )
}

export default ToDos;