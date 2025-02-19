import { useState } from "react";

export default function MainSection() {
    const [ingredients, setIngredients] = useState([]);

    /**
     * @param {Event} e
     */
    /* function handleSubmit(e) {
        e.preventDefault();

        //$ Using DOM methods
        // const formChildren = e.target.children;
        // const newIngredient = formChildren.ingredient.value;

        // if (
        //     typeof newIngredient === `string` &&
        //     newIngredient !== `` &&
        //     newIngredient !== ` `
        // ) {
        //     const modIngredient =
        //         newIngredient[0].toUpperCase() + newIngredient.slice(1);
        //     ingredients.push(modIngredient);
        // }

        //$ Using FormData constructor
        const form = e.currentTarget;
        const formData = new FormData(form);
        const newIngredient = formData.get(`ingredient`);

        if (
            typeof newIngredient === `string` &&
            newIngredient.trim() !== `` &&
            !ingredients.some(
                (item) => item === newIngredient.trim().toLowerCase()
            )
        ) {
            let modIngredient = newIngredient.trim().toLowerCase();

            setIngredients((prevIngredients) => [
                ...prevIngredients,
                modIngredient,
            ]);
        }

        console.log(ingredients);
        form.reset();
    } */

    function addIngredient(formData) {
        let newIngredient = formData.get("ingredient");

        if (
            typeof newIngredient === `string` &&
            newIngredient.trim() !== `` &&
            !ingredients.some(
                (item) => item === newIngredient.trim().toLowerCase()
            )
        ) {
            newIngredient = newIngredient.trim().toLowerCase();
            setIngredients((prevIngredients) => [
                ...prevIngredients,
                newIngredient,
            ]);
        }
    }

    const listOfIngredients = ingredients.map((ingredient, index) => (
        <li key={index} className="text-gray-600 marker:text-indigo-900">
            <em>{ingredient[0].toUpperCase() + ingredient.slice(1)}</em>
        </li>
    ));

    const [recipeShown, setRecipeShown] = useState(false);

    function getRecipe() {
        setRecipeShown((prevRecipeShown) => !prevRecipeShown);
    }

    function loadRecipe() {
        return (
            <section className="p-6">
                <h2>Chef Claude Recommends:</h2>
                <article
                    className="suggested-recipe-container"
                    aria-live="polite"
                >
                    <p>
                        Based on the ingredients you have available, I would
                        recommend making a simple a delicious{" "}
                        <strong>Beef Bolognese Pasta</strong>. Here is the
                        recipe:
                    </p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>
                            8 oz pasta of your choice (e.g., spaghetti, penne,
                            or linguine)
                        </li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>
                            Bring a large pot of salted water to a boil for the
                            pasta.
                        </li>
                        <li>
                            In a large skillet or Dutch oven, cook the ground
                            beef over medium-high heat, breaking it up with a
                            wooden spoon, until browned and cooked through,
                            about 5-7 minutes.
                        </li>
                        <li>
                            Add the diced onion and minced garlic to the skillet
                            and cook for 2-3 minutes, until the onion is
                            translucent.
                        </li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>
                            Add the crushed tomatoes, beef broth, oregano, and
                            basil. Season with salt and pepper to taste.
                        </li>
                        <li>
                            Reduce the heat to low and let the sauce simmer for
                            15-20 minutes, stirring occasionally, to allow the
                            flavors to meld.
                        </li>
                        <li>
                            While the sauce is simmering, cook the pasta
                            according to the package instructions. Drain the
                            pasta and return it to the pot.
                        </li>
                        <li>
                            Add the Bolognese sauce to the cooked pasta and toss
                            to combine.
                        </li>
                        <li>
                            Serve hot, garnished with additional fresh basil or
                            grated Parmesan cheese if desired.
                        </li>
                    </ol>
                </article>
            </section>
        );
    }

    return (
        <main className="w-full h-fit">
            <form
                className="w-full h-fit flex justify-center items-center gap-4 p-10"
                name="ingredient-adder"
                onSubmit={(event) => {
                    event.preventDefault();
                    addIngredient(new FormData(event.currentTarget));
                    event.currentTarget.reset();
                }} //$ Using event handler with event object for client side form handling
                // action={addIngredient}   //$ Primarily use it when the form data is sent to the server
            >
                <label htmlFor="ingredient">Enter Ingredient : </label>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    className="h-10 w-[40%] bg-white p-2 border-1 border-gray-300 rounded-lg"
                    name="ingredient"
                    id="ingredient"
                />
                <button
                    type="submit"
                    className=" bg-gray-900 h-10 text-gray-200 text-sm
                    w-50 cursor-pointer rounded-lg before:content-['+'] before:mr-1"
                >
                    Add Ingredient
                </button>
            </form>
            <section className="h-fit w-full flex flex-col justify-center gap-2">
                {ingredients.length > 0 && (
                    <h2 className="h-15 text-4xl font-bold pl-30">
                        Ingredients on hand :
                    </h2>
                )}
                <ul className="w-fit h-fit pl-35 list-disc flex flex-col gap-5">
                    {listOfIngredients}
                </ul>
                {ingredients.length >= 4 && (
                    <div className="w-3/6 h-30 bg-[#e7dcb4] m-5 p-5 flex justify-between items-center self-center rounded-2xl">
                        <div className="h-full flex flex-col justify-evenly">
                            <h3 className="text-2xl font-semibold">
                                Ready for a recipe?
                            </h3>
                            <p className="text-sm">
                                Generate a recipe from your list of ingredient.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="h-3/6 w-30 p-2 text-white cursor-pointer bg-[#D17557] rounded-lg"
                            onClick={getRecipe}
                        >
                            {recipeShown ? "Hide Recipe" : "Get a recipe"}
                        </button>
                    </div>
                )}
                {recipeShown && loadRecipe()}
            </section>
        </main>
    );
}
