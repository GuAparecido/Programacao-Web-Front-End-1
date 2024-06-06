import { useEffect, useState } from "react";
import "./Timer.css"

const Timer = () => {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTempo((Ototempo) => Ototempo + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [tempo])


    return (
        <div className="Timer">
            <h6>Timer: {tempo}</h6>
        </div>
    )
}

export default Timer;