import { useState } from "react";
import pointingUpEmoji from './assets/index-pointing-up.png';
import pointingDownEmoji from './assets/backhand-index-pointing-down.png';

function TodoList() {
  const [tasks, setTasks] = useState([ "Eat breakfast", "Take a shower", "Walk the dog" ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask((prevNewTask) => prevNewTask = e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [ ...prevTasks, newTask ]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

      <div className="mod-tasks">
        <input 
          type="text" 
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask} >Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => 
        <li key={index} >
          <span className="task-text" >{task}</span>
          <button className="up-btn" onClick={() => moveTaskUp(index)} >
            <img src={pointingUpEmoji} alt="☝️" />
          </button>
          <button className="down-btn" onClick={() => moveTaskDown(index)} >
            <img src={pointingDownEmoji} alt="👇" />
          </button>
          <button className="del-btn" onClick={() => deleteTask(index)} >Delete</button>
        </li>)}
      </ol>

    </div>
  )
}

export default TodoList