import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                {/* Define your nested routes here */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<div>About Page</div>} />
                <Route path="contact" element={<div>Contact Page</div>} />
                {/* Add more routes as needed */}
            </Route>
        </Routes>
    );
}

export default Router;