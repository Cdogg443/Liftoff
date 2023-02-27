// current time on the webpage
function displayCurrentTime() {
    // Get current time and format it
    const now = new Date();
    const time = now.toLocaleTimeString();
  
    // Display the time on the webpage
    const timeElement = document.getElementById('time');
    timeElement.textContent = time;
  
    // Call the function again after 1 second
    setTimeout(displayCurrentTime, 1000);
  }