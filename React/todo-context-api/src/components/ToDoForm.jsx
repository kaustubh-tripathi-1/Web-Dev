import { useState } from "react";
import { useToDoActions } from "../hooks/useToDo.js";

export default function TodoForm() {
    const { addTask } = useToDoActions();

    function handleAddTask(formData) {
        const task = formData.get(`task-input`);
        if (!task.trim()) {
            return;
        }
        addTask(task.trim());
    }

    return (
        <form
            className="flex"
            onSubmit={(event) => {
                event.preventDefault();
                handleAddTask(new FormData(event.currentTarget));
                event.currentTarget.reset();
            }}
        >
            <label htmlFor="task-input" className="sr-only">
                Add a new task
            </label>
            <input
                type="text"
                name="task-input"
                id="task-input"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 hover:bg-green-800 text-white shrink-0 cursor-pointer"
            >
                Add
            </button>
        </form>
    );
}
