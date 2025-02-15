export default function MainSection() {
    return (
        <form
            className="w-screen h-1/6 flex justify-center items-center gap-4"
            name="ingredient-adder"
        >
            <label htmlFor="ingredient">Enter Ingredient : </label>
            <input
                type="text"
                placeholder="e.g. oregano"
                className="h-2/6 w-[40%] bg-white p-2 border-1 border-gray-300 rounded-lg"
                name="ingredient"
            />
            <button
                type="submit"
                className=" bg-gray-900 h-2/6 text-gray-200 text-sm
                w-50 cursor-pointer rounded-lg before:content-['+'] before:mr-1"
            >
                Add Ingredient
            </button>
        </form>
    );
}
