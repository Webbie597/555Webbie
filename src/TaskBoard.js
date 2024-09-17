import React, { useState } from 'react';

const TaskBoard = () => {
    const [tasks, setTasks] = useState([
        { text: "Task 1", isEditing: false },
        { text: "Task 2", isEditing: false },
        { text: "Task 3", isEditing: false }
    ]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, isEditing: false }]);
            setNewTask("");
        }
    };

    const editTask = (index) => {
        const updatedTasks = tasks.map((task, i) => (
            i === index ? { ...task, isEditing: !task.isEditing } : task
        ));
        setTasks(updatedTasks);
    };

    const updateTaskText = (index, newText) => {
        const updatedTasks = tasks.map((task, i) => (
            i === index ? { ...task, text: newText, isEditing: false } : task
        ));
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
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
                    <div key={index} className="task">
                        {task.isEditing ? (
                            <input
                                type="text"
                                value={task.text}
                                onChange={(e) => updateTaskText(index, e.target.value)}
                            />
                        ) : (
                            <span onClick={() => editTask(index)}>{task.text}</span>
                        )}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
