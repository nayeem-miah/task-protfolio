import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <div>
                <Navbar />
            </div>
            {/* main content */}
            <div className="mx-auto max-w-7xl">
                <Outlet />
            </div>
            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default MainLayout;