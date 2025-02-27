import "./Styles/Home/Home.css";
import React from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = React.useState(172800); // 2 days in seconds

  React.useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Convert seconds into separate values
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;
  return (
    <>
      <div className="offer">
        <h1>
          Amazing Offers <span>Save up to 10%</span>
        </h1>
        <div id="timer">
          <div className="time-box">
            {String(days).padStart(2, "0")}
            <span>D</span>
          </div>
          <div className="time-box">
            {String(hours).padStart(2, "0")}
            <span>Hrs</span>
          </div>
          <div className="time-box">
            {String(minutes).padStart(2, "0")}
            <span>Min</span>
          </div>
          <div className="time-box">
            {String(secs).padStart(2, "0")}
            <span>Sec</span>
          </div>
        </div>
      </div>
    </>
  );
}
