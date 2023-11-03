const countdown = () => {
  // Corrected the time to 00:00:00 to represent the beginning of December 1st
  const wedding = new Date("December 01, 2023 00:00:00").getTime();
  let container = document.querySelector(".countdown");

  const now = new Date().getTime();

  const gap = wedding - now;

  if (gap <= 0) {
    container.innerText = "NOW!";
    container.style.fontSize = "10rem";
    // Stop the countdown once the date is reached
    return; 
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

// Make sure to clear this interval somewhere when the wedding date is past
setInterval(countdown, 1000);

/* -------------------------------------------------------------------------- */

let array = [17, 11, 60, 25, 150, 225, 31, 120];

function maxProfitDays(arrayGiven) {
  let maxProfit = 0;
  let timeArray = [];
  for (let i = 0; i < arrayGiven.length; i++) {
    for (let j = i + 1; j < arrayGiven.length; j++) { // Corrected loop condition
      let currDiff = arrayGiven[j] - arrayGiven[i];
      if (currDiff > maxProfit) {
        maxProfit = currDiff;
        timeArray = [i, j];
      }
    }
  }
  console.log(maxProfit); // Max profit
  console.log(timeArray); // Days to buy and sell
}

maxProfitDays(array);

// Note: To prevent NaN, make sure all selectors used (.day, .hour, .minute, .second)
// do actually exist in the HTML document and that the array passed to maxProfitDays is numeric.
