import { useContext, createContext, useState } from "react";

/* const ToDoContext =
    createContext({
    todos: [
        {
            id: 1,
            task: "",
            done: false,
        },
    ],
    addTask(task) {},
    updateTask(id, task) {},
    deleteTask(id) {},
    taskCompleteToggle(id) {},
}); */

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    function addTask(task) {}

    function updateTask(id, task) {}

    function deleteTask(id) {}

    function taskCompleteToggle(id) {}

    return (
        <ToDoContext.Provider
            value={{
                todos,
                addTask,
                updateTask,
                deleteTask,
                taskCompleteToggle,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
}

export function useToDo() {
    return useContext(ToDoContext);
}
