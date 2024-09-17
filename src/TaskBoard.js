import React, { useState } from 'react';

const TaskBoard = () => {
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div className="task-board">
            <h2>Task Board</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="task">{task}</div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
