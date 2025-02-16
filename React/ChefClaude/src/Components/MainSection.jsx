import { useState } from "react";

export default function MainSection() {
    const [ingredients, setIngredients] = useState([]);

    /**
     * @param {Event} e
     */
    function handleSubmit(e) {
        e.preventDefault();

        //$ Using DOM methods
        /* const formChildren = e.target.children;
        const newIngredient = formChildren.ingredient.value;

        if (
            typeof newIngredient === `string` &&
            newIngredient !== `` &&
            newIngredient !== ` `
        ) {
            const modIngredient =
                newIngredient[0].toUpperCase() + newIngredient.slice(1);
            ingredients.push(modIngredient);
        } */

        //$ Using FormData constructor
        const form = e.currentTarget;
        const formData = new FormData(form);
        const newIngredient = formData.get(`ingredient`);

        if (
            typeof newIngredient === `string` &&
            newIngredient.trim() !== `` &&
            !ingredients.some(
                (item) => item.toLowerCase() === newIngredient.toLowerCase()
            )
        ) {
            let modIngredient = newIngredient.trim().toLowerCase();

            setIngredients((prevIngredients) => [
                ...prevIngredients,
                modIngredient,
            ]);
        }

        console.log(ingredients);
        e.currentTarget.reset();
    }
    const listOfIngredients = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient[0].toUpperCase() + ingredient.slice(1)}</li>
    ));

    return (
        <main className="w-screen h-4/6">
            <form
                className="w-screen h-2/6 flex justify-center items-center gap-4"
                name="ingredient-adder"
                onSubmit={handleSubmit}
            >
                <label htmlFor="ingredient">Enter Ingredient : </label>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    className="h-2/6 w-[40%] bg-white p-2 border-1 border-gray-300 rounded-lg"
                    name="ingredient"
                    id="ingredient"
                />
                <button
                    type="submit"
                    className=" bg-gray-900 h-2/6 text-gray-200 text-sm
                    w-50 cursor-pointer rounded-lg before:content-['+'] before:mr-1"
                >
                    Add Ingredient
                </button>
            </form>
            <ul className="p-5 list-disc">{listOfIngredients}</ul>
        </main>
    );
}
