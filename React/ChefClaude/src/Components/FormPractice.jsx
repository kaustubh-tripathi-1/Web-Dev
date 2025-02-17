export default function FormPractice() {
    function signUp(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email);
        console.log(password);
    }

    return (
        <section className="h-screen w-screen bg-sky-400 flex flex-col  items-center gap-10">
            <h1 className="w-2/6 mt-20 text-4xl text-center h-15 font-bold ">
                Signup form
            </h1>
            <form
                action={signUp}
                className="h-3/6 w-3/6 flex flex-col justify-evenly items-start"
            >
                <label htmlFor="email" className="w-full h-fit text-2xl">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                    autoComplete="on"
                    className="w-full h-1/6 text-lg text-black bg-white placeholder:text-gray-700 rounded-2xl pl-3 mt-2 mb-8"
                />

                <label htmlFor="password" className="w-full h-fit text-2xl">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="w-full h-1/6 text-lg text-black bg-white rounded-2xl pl-3 mt-2 mb-8"
                />

                <button className="w-full h-1/6 rounded-2xl bg-white border-2 border-emerald-700 hover:bg-blue-700 cursor-pointer text-lg text-center">
                    Submit
                </button>
            </form>
        </section>
    );
}
