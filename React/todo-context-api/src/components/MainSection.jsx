import { useToDo } from "../hooks/useToDo.js";
import TodoForm from "./ToDoForm.jsx";

export default function MainSection() {
    const { todos } = useToDo();

    return (
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                    Manage Your To-Dos
                </h1>
                <div className="mb-4">
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                </div>
            </div>
        </div>
    );
}
