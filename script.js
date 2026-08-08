/* ==========================================
   RANDOM PROFILE
========================================== */

const profile =
PROFILES[Math.floor(Math.random() * PROFILES.length)];


/* ==========================================
   ELEMENTS
========================================== */

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileLocation = document.getElementById("profileLocation");
const profileBio = document.getElementById("profileBio");
const onlineStatus = document.getElementById("onlineStatus");

const waButton = document.getElementById("waButton");
const telegramButton = document.getElementById("telegramButton");
const tinderButton = document.getElementById("tinderButton");

const progressBar = document.getElementById("progressBar");
const timer = document.getElementById("timer");


/* ==========================================
   LOAD PROFILE
========================================== */

profileImage.src = "images/" + profile.image;

profileName.innerHTML = "❤️ " + profile.name;

profileLocation.innerHTML =
`${profile.age} • ${profile.city}, ${profile.country}`;

profileBio.innerHTML = profile.bio;


/* ==========================================
   ONLINE STATUS
========================================== */

switch(profile.status){

case "online":

onlineStatus.innerHTML="🟢 ONLINE NOW";

break;

case "away":

onlineStatus.innerHTML="🟡 LAST SEEN";

break;

case "busy":

onlineStatus.innerHTML="🔴 BUSY";

break;

default:

onlineStatus.innerHTML="⚪ OFFLINE";

}


/* ==========================================
   BUTTONS
========================================== */

waButton.href = SETTINGS.whatsapp;
telegramButton.href = SETTINGS.telegram;
tinderButton.href = SETTINGS.tinder;


/* ==========================================
   IMAGE ANIMATION
========================================== */

profileImage.style.opacity = "0";

profileImage.onload = () => {

profileImage.animate(

[
{opacity:0,transform:"scale(.9)"},
{opacity:1,transform:"scale(1)"}
],

{
duration:700,
fill:"forwards",
easing:"ease"
}

);

};


/* ==========================================
   COUNTDOWN
========================================== */

let seconds = SETTINGS.redirectSeconds;

timer.textContent = seconds;

let percent = 0;

const interval = 100;

const totalIntervals = (seconds * 1000) / interval;

const increase = 100 / totalIntervals;

const countdown = setInterval(()=>{

percent += increase;

progressBar.style.width = percent + "%";

const remain =
Math.ceil(
((100-percent)/100) * SETTINGS.redirectSeconds
);

timer.textContent = remain;

if(percent>=100){

clearInterval(countdown);

window.location.href =
SETTINGS.whatsapp;

}

},interval);


/* ==========================================
   BUTTON CLICK
========================================== */

waButton.addEventListener("click",()=>{

clearInterval(countdown);

});



/* ==========================================
   DISABLE IMAGE DRAG
========================================== */

profileImage.draggable=false;



/* ==========================================
   PRELOAD NEXT IMAGE
========================================== */

const preload = new Image();

const nextProfile =
PROFILES[Math.floor(Math.random()*PROFILES.length)];

preload.src =
"images/" + nextProfile.image;