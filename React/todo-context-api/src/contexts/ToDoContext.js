import { createContext } from "react";

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

export const ToDoContext = createContext();
