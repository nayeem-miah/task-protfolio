
import { useEffect, useState } from "react";
import ProjectCard from "../components/HomePage/ProjectCart";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/public/project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className="my-10">
            <div>

                <h3 className="text-center font-bold text-3xl my-6">My Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects?.map(project => (
                        <ProjectCard key={project.id} project={project}></ProjectCard>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Projects;