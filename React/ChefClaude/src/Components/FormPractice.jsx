export default function FormPractice() {
    function signUp(formData) {
        //$ Grabbing each input's value individually
        /* const email = formData.get("email");
        const password = formData.get("password");
        const employmentStatus = formData.get("employmentStatus");
        const desc = formData.get("description");
        const langs = formData.getAll("languages");
        console.log(email);
        console.log(password);
        console.log(desc);
        console.log(employmentStatus);
        console.log(langs); */

        //$ Grabbing all form data in an object
        const data = Object.fromEntries(formData); //& doesn't get all the checked values of the checkboxes, for that use .getAll() too
        const languages = formData.getAll("languages");

        const newData = { ...data, languages };

        console.log(newData);
    }

    return (
        <section className="h-full w-full bg-sky-400 flex flex-col items-center">
            <h1 className="w-2/6 mt-4 text-4xl text-center h-15 font-bold ">
                Signup form
            </h1>
            <form
                // action={(formData) => signUp(formData)}
                onSubmit={(event) => {
                    event.preventDefault();
                    signUp(new FormData(event.target));
                }}
                className="h-5/6 w-3/6 flex flex-col justify-start items-start"
            >
                <label htmlFor="email" className="w-full h-fit text-2xl">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                    defaultValue="joe@schmoe.com"
                    autoComplete="on"
                    className="w-full h-10 text-lg text-black bg-white placeholder:text-gray-700 rounded-2xl pl-3 mt-2 mb-2"
                />

                <label htmlFor="password" className="w-full h-fit text-2xl">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    defaultValue="pass123"
                    autoComplete="current-password"
                    className="w-full h-10 text-lg text-black bg-white rounded-2xl pl-3 mt-2 mb-2"
                />

                <label htmlFor="description" className="w-full h-fit text-2xl">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue="This is a description"
                    className="w-full resize-none mt-4 mb-4 bg-white p-2 outline-none focus:border-2 focus:border-blue-700"
                ></textarea>

                <fieldset className="w-full mt-4 mb-4">
                    <legend className="w-full h-fit text-2xl mb-2">
                        Employment Status:
                    </legend>
                    <label className="mr-2">
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="mr-2"
                            value="unemployed"
                            required
                        />
                        Unemployed
                    </label>
                    <label className="ml-2 mr-2">
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="ml-2 mr-2"
                            value="partTime"
                        />
                        Part-time
                    </label>
                    <label className="ml-2 mr-2">
                        <input
                            type="radio"
                            name="employmentStatus"
                            className="ml-2 mr-2"
                            value="fullTime"
                            defaultChecked
                        />
                        Full-time
                    </label>
                </fieldset>

                <fieldset className="mb-4">
                    <legend className="w-full h-fit text-2xl mb-2">
                        Languages you know :
                    </legend>
                    <input
                        className="mr-2"
                        type="checkbox"
                        name="languages"
                        id="c"
                        value="c"
                    />
                    <label className="mr-2" htmlFor="c">
                        C
                    </label>
                    <input
                        type="checkbox"
                        name="languages"
                        id="c++"
                        value="c++"
                        className="ml-2 mr-2"
                    />
                    <label htmlFor="c++">C++</label>
                    <input
                        type="checkbox"
                        name="languages"
                        id="java"
                        value="java"
                        className="ml-2 mr-2"
                    />
                    <label htmlFor="java">Java</label>
                    <input
                        type="checkbox"
                        name="languages"
                        id="python"
                        value="python"
                        className="ml-2 mr-2"
                    />
                    <label htmlFor="python">Python</label>
                    <input
                        type="checkbox"
                        name="languages"
                        id="javascript"
                        value="javascript"
                        className="ml-2 mr-2"
                    />
                    <label className="mr-2" htmlFor="javascript">
                        Javascript
                    </label>
                </fieldset>

                <button className="w-full h-10 rounded-2xl bg-white border-2 border-emerald-700 hover:bg-blue-700 cursor-pointer text-lg text-center">
                    Submit
                </button>
            </form>
        </section>
    );
}
