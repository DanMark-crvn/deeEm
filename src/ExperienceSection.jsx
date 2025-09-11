// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Experiences({workExp, icons}) {
  return (
    <div className="relative overflow-hidden isolate bg-gray-900 px-6 py-24 lg:overflow-visible sm:py-32 lg:px-0 mt-24 text-start">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
      </div> */}
        <div className="mx-auto mb-16 lg:mb-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base/7 font-semibold text-indigo-400">Work Experience</p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                            My Defining Moment
                        </h1>
                        {/* <p className="mt-6 text-xl/8 text-gray-300">
                            Laguna Metts Corporation
                        </p> */}
                    </div>
                </div>
            </div>
        </div>

        {/* Content */}
        {workExp.map((exp, index) => (
            <div key={exp.id} 
                className={
                    `${index < 2 ? "mb-28" : ""} 
                    lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8`
                }
            >
                <div className="-mt-12 -ml-0 p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={exp.imageUrl}
                        className="w-3xl max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-118"
                    />
                </div>
                
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                        <p className="text-xl/8 text-gray-300" id={exp.elementId}>
                            {exp.name} - {exp.position} ({exp.startDate} - {exp.endDate})
                        </p>
                        <p className="">
                            {exp.description}
                        </p>
                        {(exp.stack || exp.tools) && (
                            <ul role="list" className="mt-8 space-y-6 text-gray-400">
                                {(exp.stack || exp.tools).map((item, i) => (
                                    <li key={i} className="flex gap-x-3 items-center">
                                        {/* <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" /> */}
                                        <img className="w-12" src={icons.LinkedInIcon} alt="icons" />
                                        <span>
                                            <strong className="font-semibold text-white">{item}</strong>
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{width: `${exp.progress[i]}%`}} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* <p className="mt-8">
                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                        </p> */}

                        {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p> */}
                    </div>
                </div>
            </div>
        ))}
          
    </div>
  )
}
