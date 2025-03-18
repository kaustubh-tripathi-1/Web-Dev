import "./TaskManager.css";

export default function TaskManager() {
    return (
        <main className="main-container">
            <h1>Task Manager</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter a task..." />
                <button>Add Task</button>
            </div>
            <ul>{/* Map over tasks and display them here */}</ul>
        </main>
    );
}
