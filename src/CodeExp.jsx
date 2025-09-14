export const CodeExp =({experiences}) => {
    return (  
        <>
            <p className="text-blue-400">
                {'const '}
                <span className="text-yellow-300">Experiences</span>
                {' ( ) => {'}
            </p>
            <p className="text-purple-400 indent-4">{'return ('}</p>

            {experiences.entries.map((exp) =>(
                <div key={exp.id}>
                    <p className="text-blue-400 indent-12">{'<div>'}</p>
                    <p className="text-blue-400 indent-18">{'<p>'}</p>
                    <p className="text-lg indent-23">
                        <a href={`#${exp.elementId}`} className="!text-gray-300">
                            {exp.name}
                        </a>
                    </p>
                    <p className="text-gray-400 indent-23">
                        {exp.position}
                    </p>
                    <p className="text-blue-400 indent-18">{'</p>'}</p>
                    <p className="text-blue-400 indent-12">{'</div>'}</p><br />
                </div>
            ))}

            <p className="text-purple-400 indent-4">{');'}</p>
            <p className="text-blue-400">{'}'}</p><br />

            <p className="text-purple-400">
                {'export default '}
                <span className="text-yellow-300">{'Experiences'}</span>
                {';'}
            </p>
        </>
    );
}
