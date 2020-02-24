var wakeUpTime = 9; // 9AM
var noon = 12;
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var evening = 18; // 6PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false; //added variable to toggle party time button

var updateClock = function() {

    var lolcat = document.getElementById("lolcat"); //Getting image element from html
    var message = document.getElementById("timeEvent");//Getting text element from html
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; //Defining default image

    if (time == partyTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZ PARTEE TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME...";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZ TIME TO GETTUP.";
    } else if (time < noon) {
        messageText = "Good morning!";
    } else if (time > evening) {
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }

    message.innerText = messageText;
    lolcat.src = image;

    showCurrentTime(); //This function is defined below and creates clock.

};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock(); //call updateClock function

//Set up interval to increment, create variable to represent one second and use built in function setInterval

var oneSecond = 1000; //JS tracks time in milliseconds
setInterval(updateClock,oneSecond); //function takes two parameters - function you're referring to and increment value (which it tracks in milliseconds)

//Will write all event based JS at the bottom of code.

var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function() {

  if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
  else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "black";
  }

};

partyTimeButton.addEventListener("click", partyEvent);

//Add wake up, nap and lunch time events.

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
      wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
