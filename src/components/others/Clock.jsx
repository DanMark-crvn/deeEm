import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            // Force re-render every second
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return ( 
        <div className="text-white flex justify-center items-center gap-6">
            <p className="text-gray-200">{time.toLocaleDateString()}</p>
            <p className="text-gray-200">|</p>

            <p className="text-gray-200">{time.toLocaleTimeString()}</p>
        </div>
     );
}
 
export default Clock;