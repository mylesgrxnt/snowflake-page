function timeUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Create a Date object for Christmas Day this year
  const christmas = new Date(currentYear, 11, 25); // 11 is December (months are 0-indexed)
  
  // If Christmas has already passed this year, set the date for next year
  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  // Calculate the difference in milliseconds
  const timeDifference = christmas - today;

  // Convert the difference to days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Return a string with the time remaining
  return [days, hours, minutes, seconds];
}

// Function to update the countdown on the page
function updateCountdown() {
  const daysElement = document.getElementById('days');
  daysElement.innerText = timeUntilChristmas()[0];
  const hoursElement = document.getElementById('hours');
  hoursElement.innerText = timeUntilChristmas()[1];
  const minutesElement = document.getElementById('minutes');
  minutesElement.innerText = timeUntilChristmas()[2];
  const secondsElement = document.getElementById('seconds');
  secondsElement.innerText = timeUntilChristmas()[3];
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately when the page loads
updateCountdown();