import React, { useState, useEffect } from 'react';

const CountDownTimer = () => { 
  // Define the initial countdown date
  const countDownDate = new Date("Jul 13, 2024 12:00:00 GMT-4").getTime();

  // Define state variables for hours, minutes, and seconds
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    // Update the countdown every 1 second 
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      if (distance > 0) {
        // Calculate remaining time
        const hoursRemaining = Math.floor(distance / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        // Format output-string
        const formattedHours = (hoursRemaining < 10 ? '0' + hoursRemaining : hoursRemaining);
        const formattedMinutes = (minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining);
        const formattedSeconds = (secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining);

        // Update state with formatted values
        setHours(formattedHours);
        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);
      } else {
        // Display EXPIRED when countdown ends
        setHours('EXPIRED');
        setMinutes('');
        setSeconds('');
        clearInterval(timer);
      }
    }, 1000); 

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
          <div className="row text-center">
                <div className="col-sm-4">
                    <h1 style={{ fontSize: '70px', fontWeight: 'bolder' }} id="hours">{hours}</h1>
                    <br/><h3 style={{ fontSize: '30px', fontWeight: 'bolder' }}>Hours</h3> 
                </div>
                <div className="col-sm-4">
                    <h1 style={{ fontSize: '70px', fontWeight: 'bolder' }} id="minutes">{minutes}</h1>
                    <br/><h3 style={{ fontSize: '30px', fontWeight: 'bolder' }}>Mins</h3> 
                </div>
                <div className="col-sm-4">
                    <h1 style={{ fontSize: '70px', fontWeight: 'bolder' }} id="seconds">{seconds}</h1>
                    <br/><h3 style={{ fontSize: '30px', fontWeight: 'bolder' }}>Sec</h3> 
                </div>  
         </div>
  );
};

export default CountDownTimer; 
