
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";


const Contact = () => {
    return (
        <div className="py-2">

            <h3 className="text-center font-bold text-3xl ">Contact</h3>

            <div id='form'>
                <div className="">
                    {/* lets message me */}
                    <div className="">
                        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                            <div className="flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">Let's talk!</h2>
                                    <p className="text-white">Vivamus in nisl metus? Phasellus.</p>
                                </div>
                                <img src="assets/svg/doodle.svg" alt="Decorative Doodle" className="p-6 h-52 md:h-64" />
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="text-sm text-white">Full name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm text-white">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="text-sm text-white">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Your message"
                                        className="w-full p-3 rounded border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-200 transition duration-300 text-black"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className=" w-full px-6 py-3 text-black bg-[#EA580C]     hover:bg-[#bf4503] font-bold  rounded ">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;