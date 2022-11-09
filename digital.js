let hours = document.getElementsByClassName("hours_time");//gives the list of elements
let minutes = document.getElementsByClassName("minutes_time");
let seconds = document.getElementsByClassName("seconds_time");
let ampm = document.getElementsByClassName("ampm");

//creating the time function for updating the time

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "AM";

  if (h > 12) {
    h = h - 12;
    ap = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours[0].innerText = h;//selecting the first element in the array
  minutes[0].innerText = m;
  seconds[0].innerText = s;
  ampm[0].innerText = ap;

  //call this function to get the current time every second 

  setTimeout(() => {
    updateClock();
  }, 1000)
}

updateClock();