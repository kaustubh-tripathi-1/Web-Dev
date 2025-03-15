import { useToDo } from "../hooks/useToDo.js";
import TodoForm from "./ToDoForm.jsx";
import TodoItem from "./ToDoItem.jsx";

export default function MainSection() {
    const { todos, clearAllTodos } = useToDo();

    return (
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full h-fit max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white flex flex-col justify-center gap-4">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                    Manage Your To-Dos
                </h1>
                <div className="mb-4">
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                        />
                    ))}
                </div>
                {todos.length > 0 && (
                    <button
                        type="button"
                        className="cursor-pointer h-10 w-1/2 self-center bg-red-400 hover:bg-[#ff4949] rounded-xl"
                        onClick={clearAllTodos}
                    >
                        Clear all To-Dos
                    </button>
                )}
            </div>
        </div>
    );
}
