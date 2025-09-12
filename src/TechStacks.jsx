const TechStacks = ({stackIcons}) => {
    return ( 
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl/8 font-semibold text-white">Tech Stacks</h2>
                <div className="px-0 lg:px-16 mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {stackIcons.map((icon) => (
                        <div key={icon.id} className="p-3 col-span-2 rounded-lg bg-gray-800 lg:col-span-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            <div className="px-12 md:px-11">
                                <img
                                    alt={icon.name}
                                    src={icon.url}
                                    width={158}
                                    height={48}
                                    className={
                                        `${icon.name === 'MysqlIcon' || icon.name === 'AspIcon'
                                            ? 'bg-gray-200 rounded py-0.5' 
                                            : 'bg-gray-800'
                                        } col-span-2 max-h-12 w-full object-contain lg:col-span-1`
                                    }
                                />
                            </div>
                            {/* <div className="w-full mt-2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: icon.progress}} />
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TechStacks;