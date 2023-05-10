const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function getTime() {
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = 'AM'

   if (h > 12) {
      h = h - 12;
      ampm ='PM';
   }

   h = h < 10 ? '0' + h: h;
   m = m < 10 ? '0' + m: m;
   s = s < 10 ? '0' + s: s;

   hoursEl.innerText = h;
   minutesEl.innerText = m;
   secondsEl.innerText = s;
   ampmEl.innerText = ampm;
   setTimeout(() => {
      getTime();
   }, 1000);
}

getTime()