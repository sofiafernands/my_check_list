import React from "react";
import { TodoIcon } from './TodoIcon';


function CompleteIcon ({completed , onComplete}) {
    return (
        <TodoIcon 
        type = "check" 
        color= {completed ? 'green' : 'red'}
        onClick={onComplete}
        />
    )
}
 export { CompleteIcon }