
import Banner from "../components/HomePage/Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {

    return (
        <div>
            {/* Banner Section */}
            <Banner />

            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
}
export default Home;
