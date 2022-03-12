import React, { useEffect, useState } from "react";

const Countdown = () => {
    // set time interval to countdown from todays date until 10 April 2022
    const [count, setCount] = useState(new Date("April 10, 2022").getTime());

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        const timeLeft = new Date(count);
        setDays(timeLeft.getUTCDate() - new Date().getUTCDate());
        setHours(timeLeft.getUTCHours() - new Date().getUTCHours());
        setMinutes(timeLeft.getUTCMinutes() - new Date().getUTCMinutes());
        setSeconds(timeLeft.getUTCSeconds() - new Date().getUTCSeconds());
    }, [count]);

    return (
        <div className="countdown">
            <div className="countdown__item">
                <div className="countdown__item-value">{days}</div>
                <div className="countdown__item-label">Days</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__item-value">{hours}</div>
                <div className="countdown__item-label">Hours</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__item-value">{minutes}</div>
                <div className="countdown__item-label">Minutes</div>
            </div>
            <div className="countdown__item">
                <div className="countdown__item-value">{seconds}</div>
                <div className="countdown__item-label">Seconds</div>
            </div>
        </div>
    );
};
    
//     // const [count, setCount] = useState(5);
    
//     useEffect(() => {
//         if (count > 0) {
//         const interval = setInterval(() => {
//             setCount(count - 1);
//         }, 1000);
    
//         return () => clearInterval(interval);
//         }
//     }, [count]);
    
//     // convert count to display in date format
//     const days = Math.floor(count / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((count % (1000 * 60)) / 1000);


//     return (
//         <div className="countdown">
//             <div className="countdown-item">
//                 <div className="countdown-item-label">Days</div>
//                 <div className="countdown-item-amount">{days}</div>
//             </div>
//             <div className="countdown-item">
//                 <div className="countdown-item-label">Hours</div>
//                 <div className="countdown-item-amount">{hours}</div>
//             </div>
//             <div className="countdown-item">
//                 <div className="countdown-item-label">Minutes</div>
//                 <div className="countdown-item-amount">{minutes}</div>
//             </div>
//             <div className="countdown-item">
//                 <div className="countdown-item-label">Seconds</div>
//                 <div className="countdown-item-amount">{seconds}</div>
//             </div>
//         <h1>{count}</h1>
//         </div>
//     );
// };

export default Countdown;