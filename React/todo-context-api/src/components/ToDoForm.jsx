import { useToDo } from "../hooks/useToDo.js";

export default function TodoForm() {
    const { addTask } = useToDo();

    function handleAddTask(formData) {
        const task = formData.get(`task-input`);
        addTask(task);
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
            <input
                type="text"
                name="task-input"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}
