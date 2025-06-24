import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectCard = ({ project }) => {
    useEffect(() => {
        Aos.init();
    }, []);
    //   console.log(project);

    return (
        <div >
            <div
                className="card  h-full w-full shadow-xl"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <figure>
                    <img className="hover:scale-105" src={project.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl lg:text-3xl">{project.name}</h2>
                    <div className="flex"> {
                        project?.technologies?.map(lan => <div><button className=" text-blue-600 border rounded-full px-1">#{lan}</button></div>)}</div>
                    <p>{project.description}</p>
                    <div className="card-actions justify-end grid grid-cols-3  ">
                        <Link
                            to={""}
                            className="badge badge-outline flex items-center gap-1  hover:text-blue-600 hover:font-bold"
                        >
                            <button title="live link"> <FaLink></FaLink></button>
                        </Link>
                        <Link
                            to={""}
                            className="badge badge-outline flex items-center gap-1 hover:text-blue-600 hover:font-bold"
                        >
                            <button title="client link">
                                <FaGithub></FaGithub>
                            </button>
                        </Link>
                        <Link
                            to={""}
                            className="badge badge-outline flex items-center gap-1 hover:text-blue-600 hover:font-bold"
                        >
                            <button title={"server link"}>
                                <FaGithub></FaGithub>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;