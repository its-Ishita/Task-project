import { useState } from "react";
import TaskShow from "./taskShow";

const Taskform = ({ active, setActive }) => {
	const [task, setTask] = useState([]);
	const [text, setText] = useState({title: "", summary: ""});

	function handleFormSubmit(e) {
		e.preventDefault(); // stop page reload
		setTask([...task, text]); // add new task
		setText({title: "", summary: ""}); // clear input
	}

	function deleteTask(index) {
		const newTask = [];

		for (let i = 0; i < task.length; i++) {
			if (i !== index) {
				// if this is NOT the one we want to delete
				newTask.push(task[i]);
			}
		}

		setTask(newTask);
	}

	return (
	  <div className="parent-form">

		<div className={`${active ? "form-page active" : "form-page"}`}>
			<div className="design-form">
				{/* FORM */}
				<form onSubmit={handleFormSubmit}>
					<label>Title</label> <br />
					<input
						type="text"
						placeholder="title"
						value={text.title}
						onChange={(e) => setText({...text,title:e.target.value})}
					/>
					<br /> <br />
					{/* You can add Summary input later */}
					<label>Summary</label> <br />
					<input
						type="text"
						placeholder="summary"
						value={text.summary}
						onChange={(e) => setText({...text,summary:e.target.value})}
					/>
					<br /> <br />
					<div className="btn-flex">
						{/* Cancel Button */}
						<div className="cancel-btn" onClick={() => setActive(false)}>
							Cancel
						</div>

						{/* Create Task Button */}
						<button type="submit" className="create-btn">
							Create Task
						</button>
					</div>
				</form>	
			</div>

			{/* Task List */}
				<section className="myUnOrdList">
					<ul>
						{task.map((curTask, index) => (
							<div key={index}>
								<TaskShow
									a={curTask}
									deleteTask={() => deleteTask(index)}
								/>
							</div>
						))}
					</ul>
				</section>
		</div>
	 </div>	
	 
	);
};

export default Taskform;
