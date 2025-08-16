import React from "react";
import { MdDeleteForever } from "react-icons/md";
const TaskShow = ({a, deleteTask}) => {
	return (
		<>
			<li className="data-style"style={{ margin: "10px 0", border: "1px solid grey"}}>
              <h4 className="data-flex">{a.title}    
			  <button onClick={deleteTask}><MdDeleteForever fontSize={25}/></button></h4>
			  <p>{a.summary}</p>
          </li>
		</>
	);
};

export default TaskShow;
