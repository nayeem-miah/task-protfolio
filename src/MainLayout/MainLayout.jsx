import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

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
                footer
            </div>
        </div>
    )
}
export default MainLayout;