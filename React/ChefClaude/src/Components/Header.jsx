import chefLogo from "../assets/chef-claude-icon.png";

export default function Header() {
    return (
        <header className="w-full h-1/6 bg-white flex justify-center items-center shadow gap-3">
            <a href="/">
                <img src={chefLogo} alt="Chef logo" className="w-14" />
            </a>
            <h1 className="text-4xl font-medium text-gray-900">Chef Claude</h1>
        </header>
    );
}
