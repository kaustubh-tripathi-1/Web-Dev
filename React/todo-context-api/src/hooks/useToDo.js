import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

export function useToDo() {
    return useContext(ToDoContext);
}
