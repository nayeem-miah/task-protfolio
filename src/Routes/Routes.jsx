import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                {/* Define your nested routes here */}
                <Route path="/" element={<Home />
                } />
                <Route path="project" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                {/* Add more routes as needed */}
            </Route>
        </Routes>
    );
}

export default Router;