let h;
let m;
let s;
let ampm;

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
   h = new Date().getHours();
   m = new Date().getMinutes();
   s = new Date().getSeconds();
   ampm = 'AM'

   if (h > 12) {
      h = h - 12;
      ampm ='PM';
   }
   
   changeBG();

   h = h < 10 ? '0' + h: h;
   m = m < 10 ? '0' + m: m;
   s = s < 10 ? '0' + s: s;

   hoursEl.innerText = h;
   minutesEl.innerText = m;
   secondsEl.innerText = s;
   ampmEl.innerText = ampm;
   setTimeout(() => {
      updateClock();
   }, 1000);
}

function changeBG() {
   if (h >= 5 && h <= 8 && ampm === 'AM') {
      document.body.style.background = "url('./img/sunrise.jpg')";
   } else if (h >= 9 && h <= 11 && ampm === 'AM' ||
      h <= 5 && ampm === 'PM' ||
      h === 12 && ampm === 'PM') {
      document.body.style.background = "url('./img/day.jpg')";
   } else if (h >= 6 && h <= 8 && ampm === 'PM') {
      document.body.style.background = "url('./img/sunset.jpg')";
   } else if (h >= 9 && h <= 11 && ampm === 'PM' ||
      h >= 1 && h <= 4 && ampm === 'AM' ||
      h === 12 && ampm === 'AM') {
      document.body.style.background = "url('./img/night.jpg')";
      document.getElementsByTagName('h1')[0].style.color = 'lightskyblue'
   }
   document.body.style.backgroundSize = 'cover';
}

updateClock()