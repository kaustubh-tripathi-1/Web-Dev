import { useEffect, useState, useMemo } from "react";
import { ToDoContext } from "../contexts/ToDoContext.js";

export default function ToDoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    //$ All functions to be added to context
    //@ Adds a task to the todos state
    function addTask(task) {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: crypto.randomUUID(),
                task: task,
                completed: false,
            },
        ]);
    }

    //@ Updates the task with the id in the todos state using map()
    function updateTask(id, task) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === id ? { ...todo, task: task } : todo;
            })
        );
    }

    //@ Deletes the task with the id in the todos state using filter()
    function deleteTask(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    //@ Toggles the completion of task with the id in the todos state using map() and overwriting the completed property
    function toggleTaskCompleted(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function clearAllTodos() {
        setTodos([]);
        localStorage.removeItem(`todos`);
    }

    //@ 1st side effect - to get all the stored todos from the local storage
    useEffect(() => {
        try {
            const localTodos = JSON.parse(localStorage.getItem("todos"));
            if (localTodos && localTodos.length) {
                setTodos(localTodos);
            }
        } catch (error) {
            console.error("Failed to load todos from localStorage:", error);
            setTodos([]);
        }
    }, []);

    //@ 2nd side effect - to set all the todos which are in the state todos to the local storage
    useEffect(() => {
        //& To ensure latest state value avoiding stale todos value
        setTodos((prevTodos) => {
            localStorage.setItem(`todos`, JSON.stringify(prevTodos));
            return prevTodos;
        });
    }, [todos]);

    const contextValue = useMemo(
        () => ({
            todos,
            addTask,
            updateTask,
            deleteTask,
            toggleTaskCompleted,
            clearAllTodos,
        }),
        [todos] // Only recreate if todos changes
    );

    return (
        <ToDoContext.Provider value={contextValue}>
            {children}
        </ToDoContext.Provider>
    );
}
