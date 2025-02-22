import Markdown from "react-markdown";
import "./ClaudeRecipe.css";

export default function ClaudeRecipe({ recipeFromAI }) {
    return (
        <section
            className="suggested-recipe-container prose p-8 text-[#002152]"
            aria-live="polite"
        >
            <h2 className="mb-4 text-2xl font-bold">Chef Claude Recommends:</h2>
            <article className="suggested-recipe-article" aria-live="polite">
                <Markdown>{recipeFromAI}</Markdown>
            </article>
        </section>
    );
}
