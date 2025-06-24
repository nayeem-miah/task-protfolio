import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                {/* Define your nested routes here */}
                <Route path="/" element={<Home />
                } />
                <Route path="project" element={<Projects />} />
                <Route path="contact" element={<div>Contact Page</div>} />
                {/* Add more routes as needed */}
            </Route>
        </Routes>
    );
}

export default Router;