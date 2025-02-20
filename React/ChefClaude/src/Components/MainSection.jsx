import { useState } from "react";
import IngredientsList from "./IngredientsList.jsx";

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
                (item) => item === newIngredient.trim().toLowerCase(),
            )
        ) {
            newIngredient = newIngredient.trim().toLowerCase();
            setIngredients((prevIngredients) => [
                ...prevIngredients,
                newIngredient,
            ]);
        }
    }

    const [recipeShown, setRecipeShown] = useState(false);

    function getRecipe() {
        setRecipeShown((prevRecipeShown) => !prevRecipeShown);
    }

    return (
        <main className="h-fit w-full">
            <form
                className="flex h-fit w-full items-center justify-center gap-4 p-10"
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
                    className="h-10 w-[40%] rounded-lg border-1 border-gray-300 bg-white p-2"
                    name="ingredient"
                    id="ingredient"
                />
                <button
                    type="submit"
                    className="h-10 w-50 cursor-pointer rounded-lg bg-gray-900 text-sm text-gray-200 before:mr-1 before:content-['+']"
                >
                    Add Ingredient
                </button>
            </form>
            <IngredientsList
                ingredients={ingredients}
                getRecipe={getRecipe}
                recipeShown={recipeShown}
            />
        </main>
    );
}
