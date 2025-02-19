import { useState } from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Counter from "./Components/PracticeCompos/Counter";
import Practice from "./Components/PracticeCompos/Practice";
import PracticeObjects from "./Components/PracticeCompos/PracticeObjects";
import FormPractice from "./Components/PracticeCompos/FormPractice";
import jokes from "./Components/PracticeCompos/ConditionalRenderingWithJokeCompo/jokesData.js";
import Joke from "./Components/PracticeCompos/ConditionalRenderingWithJokeCompo/Joke.jsx";

export default function App() {
    /* //$ Render Jokes
    const jokesList = jokes.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    )); */

    //$ Conditional Rendering challenges
    /* const [msgs, setMsgs] = useState([]);

    function showNotification() {
        if (msgs.length === 0) {
            return `You're all caught up.`;
        } else if (msgs.length === 1) {
            return `You have ${msgs.length} unread msg.`;
        } else {
            return `You have ${msgs.length} unread msgs.`;
        }
    } */

    return (
        <>
            <Header />
            <MainSection />
            {/* <Counter /> */}
            {/* <Practice /> */}
            {/* <PracticeObjects /> */}
            {/* <FormPractice /> */}
            {
                //$ Conditional Rendering challenges
                /* <main className="w-full bg-emerald-400 max-h-fit flex flex-col justify-center ">
                {jokesList}
                </main> */
                // <h1>{showNotification()}</h1>
            }
        </>
    );
}
