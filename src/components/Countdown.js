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
            <div className="countdown-item">
                <div className="countdown-item-value">{days}</div>
                <div className="countdown-item-label">Days</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{hours}</div>
                <div className="countdown-item-label">Hours</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{minutes}</div>
                <div className="countdown-item-label">Minutes</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{seconds}</div>
                <div className="countdown-item-label">Seconds</div>
            </div>

            <style>
                {`
                    .countdown {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 50px;
                        border: 3px solid #fff;
                        border-radius: 25px;
                        padding: 25px;
                    }

                    .countdown-item {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin: 0 10px;
                    }

                    .countdown-item-value {
                        font-size: 3rem;
                        font-weight: bold;
                        color: #fff;
                    }

                    .countdown-item-label {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #fff;
                    }

                    span {
                        font-size: 2rem;
                        font-weight: bold;
                        color: #fff;
                        padding: 0 10px;
                    }

                    @media screen and (max-width: 768px) {
                        .countdown {
                            margin-top: 20px;
                        }

                        .countdown-item {
                            margin: 0 5px;
                        }

                        .countdown-item-value {
                            font-size: 1.5rem;
                        }

                        .countdown-item-label {
                            font-size: 0.75rem;
                        }

                        span {
                            font-size: 1.5rem;
                            letter-spacing: 1px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Countdown;