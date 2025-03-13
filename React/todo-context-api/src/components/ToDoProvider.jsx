import { useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext.js";

export default function ToDoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    function addTask(task) {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now(),
                task: task,
                completed: false,
            },
        ]);
    }

    function updateTask(id, task) {}

    function deleteTask(id) {}

    function toggleTaskCompleted(id) {}

    return (
        <ToDoContext.Provider
            value={{
                todos,
                addTask,
                updateTask,
                deleteTask,
                toggleTaskCompleted,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
}
