function trka() {
var i = 0;
for(i=1;i<=70;i++){
document.querySelector('#img2').style.margin = '500px';
}
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}
}

setInterval(showTime, 1000);
function showTime() {
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
am_pm = "AM";

if (hour > 12) {
hour -= 12;
am_pm = "PM";
}
if (hour == 0) {
hr = 12;
am_pm = "AM";
}

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

let currentTime = hour + ":"
+ min + ":" + sec + am_pm;

document.getElementById("saat")
.innerHTML = currentTime;
}

showTime();