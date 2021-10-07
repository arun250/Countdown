const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');



const newyears ="1 Dec 2022";
function countdown()
{
    const newyearsdate = new Date(newyears);
    const currentDate = new Date();
    const totalseconds = (newyearsdate - currentDate)/ 1000
    const days = Math.floor(totalseconds/3600 /24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const mins = Math.floor(totalseconds/60)% 60;
    const seconds = Math.floor(totalseconds% 60);

    daysEl.innerHTML =days;
    hoursEl.innerHTML =formatTime(hours);
    minsEl.innerHTML =formatTime(mins);
    secEl.innerHTML = formatTime(seconds);
       }
function formatTime(time){
    return time <10 ? '0'+ time : time;
}

           countdown();
       setInterval(countdown, 1000);
