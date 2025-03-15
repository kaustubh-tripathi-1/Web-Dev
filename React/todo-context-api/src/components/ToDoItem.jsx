import { useState } from "react";
import { useToDo } from "../hooks/useToDo";

export default function TodoItem({ id, task, completed }) {
    const { updateTask, deleteTask, toggleTaskCompleted } = useToDo();

    const [isTodoEditable, setIsTodoEditable] = useState(completed);
    const [toDoMsg, setTodoMsg] = useState(task);

    return (
        <div
            className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <label
                htmlFor="mark-as-completed"
                className="cursor-pointer text-xs whitespace-nowrap flex items-center"
            >
                Mark as done
            </label>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={completed}
                onChange={() => toggleTaskCompleted(id)}
                id="mark-as-completed"
            />
            <input
                type="text"
                className={`whitespace-pre-wrap h-fit border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable
                        ? "border-black/10 px-2"
                        : "border-transparent"
                } ${completed ? "line-through" : ""}`}
                value={toDoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
                onClick={() => {
                    if (completed) return;

                    if (isTodoEditable) {
                        updateTask(id, toDoMsg);
                        setIsTodoEditable((prev) => !prev);
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
                onClick={() => deleteTask(id)}
            >
                ❌
            </button>
        </div>
    );
}
