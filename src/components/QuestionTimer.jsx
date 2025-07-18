import { useEffect, useState } from "react";


export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    
    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [onTimeout, timeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <progress 
            id='question-time'
            max={timeout}
            value={remainingTime}
        />
    );
};