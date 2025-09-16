import { useState } from "react";

const PersonalProjects = ({personalProjects}) => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <>
            <h2 className="text-center text-xl font-semibold">Personal Projects</h2>
            <div className="flex justify-center gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bx bx-chevron-up text-4xl transition-transform duration-300 animate-bounce ${isOpen ? 'rotate-180' : ''}`}></i>
            </div>

            {isOpen && (
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[1000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                        }`}
                    data-aos="zoom-in-up"
                >
                    <div className="bg-gray-900 py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            {personalProjects.map((projects) => (
                                <div key={projects.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base/7 text-gray-300">{projects.name}</dt>
                                    <dd className="items-center p-2">
                                        <div className="bg-gray-300 flex items-center justify-center rounded py-2 px-1 mx-3 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500">
                                            <a href={projects.url} target="_blank" rel="noopener noreferrer">
                                                <img src={projects.icon} alt={projects.name} width={60} height={60} />
                                            </a>
                                        </div>
                                    </dd>
                                </div>
                            ))}
                            </dl>
                        </div>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default PersonalProjects;