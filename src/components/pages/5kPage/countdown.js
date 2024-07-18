import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Countdown = () => {
     // Set the date we're counting down to
  const countDownDate = new Date("August 17, 2024 09:30:00").getTime();

  
  // Update the countdown every 1 second
  const x = setInterval(function() {
    

    // Get the current date and time
    const now = new Date().getTime();

    //*Countdown.style.visibility = 'hidden';
    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    if(document.getElementById("days")) {
      document.getElementById("days").innerHTML = days.toString().padStart(2, '0')
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
      }

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00".padStart(2, '0');
      document.getElementById("hours").innerHTML = "00".padStart(2, '0');
      document.getElementById("minutes").innerHTML = "00".padStart(2, '0');
      document.getElementById("seconds").innerHTML = "00".padStart(2, '0');
      document.getElementById("countdown").innerHTML = "EXPIRED";
      Countdown.style.visibility = 'visible';
    } 
  }, 1000);
  }
  
  export default Countdown;