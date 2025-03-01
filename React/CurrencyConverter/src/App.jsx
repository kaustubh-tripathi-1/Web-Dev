import { useState } from "react";
import bgImage from "./assets/bgImages/17454.jpg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="h-full w-full bg-[url(./assets/bgImages/17454.jpg)] bg-cover bg-no-repeat bg-center">
            <h1>Hi</h1>
        </main>
    );
}

export default App;
