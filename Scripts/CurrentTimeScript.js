var showCurrentTime = function() {

    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours   = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= 12)
    {
        meridian = "PM";
    }

    if (hours > 12)
    {
        hours = hours - 12;
    }

    // Set Mins
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // String to display the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

    clock.innerText = clockTime;
};

showCurrentTime();

// Increment the clock every second
var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);