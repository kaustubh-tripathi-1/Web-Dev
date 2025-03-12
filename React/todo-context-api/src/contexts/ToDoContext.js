import { useContext, createContext } from "react";

export const ToDoContext = createContext({
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
});

export const ToDoProvider = ToDoContext.Provider;

export function useToDo() {
    return useContext(ToDoContext);
}
