import { Link } from "react-router";
import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("/public/skills.json")
            .then(res => res.json())
            .then(data => setSkills(data))
    }, []);


    // console.log(skills);
    return (
        <div>

            <h3 className="text-center text-3xl font-semibold lg:my-10 my-5 ">
                My Skills
            </h3>
            <p className=" text-xs lg:text-xl my-9">
                am a Python Django Developer skilled in building scalable and secure web applications. With a strong foundation in Python, I focus on backend development, data analysis, and scripting, always prioritizing code readability and efficiency. My expertise in the Django framework enables me to create robust applications with RESTful APIs and manage complex database operations seamlessly. Additionally, I am proficient in HTML5, CSS3, and JavaScript (ES6+), allowing me to implement dynamic, responsive, and user-friendly interfaces. I also have experience with PostgreSQL for relational database management and data modeling, ensuring optimal backend support for high-performance applications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills?.map(skill => (
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <div className="card shadow-xl h-96">
                            <figure className="px-10 pt-10">
                                <img src={skill.img} alt={skill.name} className="rounded-xl h-28" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title">{skill.name}</h2>

                                <p>
                                    <span className="font-bold">description:</span>
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Skills;