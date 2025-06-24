import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const tMenu = () => {
        setOpen(!open);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">


                <Link to="/" className="text-2xl font-bold text-gray-800">MGR</Link>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/project" className="hover:text-blue-500">My works</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>

                {/* md device */}
                <div className="md:hidden">
                    <button onClick={tMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* mobile device */}
            {open && (
                <div className="md:hidden px-4 pb-4 bg-gray-200">
                    <ul className="space-y-2">
                        <li><Link to="/" className="block hover:text-blue-500">Home</Link></li>
                        <li><Link to="/about" className="block hover:text-blue-500">About</Link></li>
                        <li><Link to="/contact" className="block hover:text-blue-500">Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
