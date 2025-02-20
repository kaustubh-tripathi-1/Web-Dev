import ClaudeRecipe from "./ClaudeRecipe.jsx";

export default function IngredientsList({
    ingredients,
    getRecipe,
    recipeShown,
}) {
    const listOfIngredients = ingredients.map((ingredient, index) => (
        <li key={index} className="text-gray-600 marker:text-indigo-900">
            <em>{ingredient[0].toUpperCase() + ingredient.slice(1)}</em>
        </li>
    ));

    return (
        <section className="flex h-fit w-full flex-col justify-center gap-2">
            {ingredients.length > 0 && (
                <h2 className="h-15 pl-30 text-4xl font-bold">
                    Ingredients on hand :
                </h2>
            )}
            <ul className="flex h-fit w-fit list-disc flex-col gap-5 pl-35">
                {listOfIngredients}
            </ul>
            {ingredients.length >= 4 && (
                <div className="m-5 flex h-30 w-3/6 items-center justify-between self-center rounded-2xl bg-[#e7dcb4] p-5">
                    <div className="flex h-full flex-col justify-evenly">
                        <h3 className="text-2xl font-semibold">
                            Ready for a recipe?
                        </h3>
                        <p className="text-sm">
                            Generate a recipe from your list of ingredient.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="h-3/6 w-30 cursor-pointer rounded-lg bg-[#D17557] p-2 text-white"
                        onClick={getRecipe}
                    >
                        {recipeShown ? "Hide Recipe" : "Get a recipe"}
                    </button>
                </div>
            )}
            {recipeShown && <ClaudeRecipe />}
        </section>
    );
}
