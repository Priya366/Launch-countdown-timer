let dd = document.getElementById('days');
let hh = document.getElementById('hours');
let mm = document.getElementById('minutes');
let ss = document.getElementById('seconds');

function countdown() {
    // Set Today's date 
    let today = new Date();

    // Set launch date 
    let launchDate = new Date("December 31, 2022");

    // Difference between two dates in milliseconds
    let difference = launchDate.getTime() - today.getTime();

    // Setting seconds,minutes,hours,days values 
    seconds = 1000;
    minutes = seconds * 60;
    hours = minutes * 60;
    days = hours * 24;

    // Coverting milliseconds to get days,hours,mins,secs

    // 1. Milliseconds in 1 day
    let launchdays = Math.floor(difference / days);

    // 2. Milliseconds in 1 hour
    let launchhours = Math.floor((difference % days) / hours);

    // 3. Milliseconds in 1 min
    let launchmins = Math.floor((difference % hours) / minutes);

    // 2. Milliseconds in 1 sec
    let launchsecs = Math.floor((difference % minutes) / seconds);

    // Add '0' in front of single digit 
    launchdays = launchdays < 10 ? '0' + launchdays : launchdays;
    launchhours = launchhours < 10 ? '0' + launchhours : launchhours;
    launchmins = launchmins < 10 ? '0' + launchmins : launchmins;
    launchsecs = launchsecs < 10 ? '0' + launchsecs : launchsecs;

    // Add values to HTML 
    dd.innerHTML = launchdays;
    hh.innerHTML = launchhours;
    mm.innerHTML = launchmins;
    ss.innerHTML = launchsecs;

    // countdown timer 
    setTimeout(countdown, 1000);
}

countdown();
