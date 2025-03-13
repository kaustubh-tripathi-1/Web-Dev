import { ToDoProvider } from "./contexts/ToDoContext";
import MainSection from "./components/MainSection";

export default function App() {
    return (
        <ToDoProvider>
            <MainSection />
        </ToDoProvider>
    );
}
