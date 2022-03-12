import React, { useEffect, useState, useRef } from "react";

const Countdown = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('April 2, 2022 19:30:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                return;
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => clearInterval(interval);
    });
    
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

export default Countdown;