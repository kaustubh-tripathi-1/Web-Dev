import { Outlet } from "react-router";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
