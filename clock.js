function DigitalClock(){
let clock=document.getElementById("clock");

const myclock=new Date();
let hrs=17-myclock.getHours();
let mins=59-myclock.getMinutes();
let sec=59-myclock.getSeconds();
if(sec<10){

sec="0"+sec;
}
if(mins<10){

mins="0"+mins;
}
if(hrs<10){

hrs="0"+hrs;
}



clock.innerHTML=hrs+":"+mins+":"+sec;
}
setInterval(DigitalClock,500)
DigitalClock()


