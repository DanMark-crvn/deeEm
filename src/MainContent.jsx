import { CodeExp } from "./codeExp";
import Experiences from "./ExperienceSection";

const MainContent = ({details}) => {
    const stats = details.stats;
    const experience = details.exp;
    const workExp = details.workExperience;
    return ( 
        <main className="">
           <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-indigo-400">Know me well</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        Everything you need to know about {details.nickname}
                    </p>
                    
                    {/* SECTION 1 */}
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                        {/* 1- INFO */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <div className="flex flex-col gap-4 justify-center items-center md:flex-row lg:flex-row lg:items-start">
                                        <img src="/src/assets/imgs/me.png" className="rounded" alt="Me" width={200} />
                                        <div className="w-full mx-auto px-0 md:px-6 lg:px-6 text-start md:text-start bg-gray-900 outline outline-white/20">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{details.name}</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                                {details.email}
                                            </p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                                {details.phone}
                                            </p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                                {details.location}
                                            </p>

                                            <div className="mt-4 pb-1.5 text-center">
                                                <p className="italic">{details.headline}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="@container relative min-h-100 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="py-24 sm:py-32">
                                        <div className="flex justify-center items-center px-6">
                                            <dl className="grid grid-cols-2 justify-center gap-8 lg:gap-0 text-center md:grid-cols-2 lg:grid-cols-4 items-center p-4 bg-gray-900 outline-white/20 rounded">
                                            {stats.map((stat) => (
                                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                    <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.count}</dd>
                                                </div>
                                            ))}
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
                        </div>
                        {/* 1 end */}
                                                
                        {/* 2 - EXPERIENCE */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">About me</p>
                                <p className="mt-2 text-justify max-w-lg text-sm/6 text-gray-400 max-lg:text-justify indent-8">
                                    I am a dedicated and passionate individual with an adequate background in software development and a keen interest in web development. I thrive in dynamic environments where I can leverage my problem-solving skills and attention to detail to deliver exceptional results. With a commitment to continuous learning, I am eager to contribute my skills and enthusiasm to a forward-thinking organization.
                                </p>
                            </div>
                            <div className="relative min-h-120 w-full grow">
                                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                                    <div className="flex bg-gray-900 outline outline-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                workExperience.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>

                                    <div className="px-6 pt-6 pb-14 h-full w-full text-justify overflow-auto">
                                        {/* Your code example */}
                                        <CodeExp experiences={experience} />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        </div>
                        {/* 2 - EXPI  END */}
                    </div>
                    {/* SECTION 1 END */}
                    
                    <Experiences workExp={workExp} icons={details.icons} />
                    
                </div>
            </div>
            {/* SECTION 2 */}
            {/* SECTION 2 END */}
        </main>
     );
}
 
export default MainContent;