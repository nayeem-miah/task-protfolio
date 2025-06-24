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
            <Outlet />
            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default MainLayout;