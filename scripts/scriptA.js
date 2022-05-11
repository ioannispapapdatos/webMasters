// DOM

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
const showAmPM = true;

// show the Time...

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  // set pm of am
  const amPm = hour >= 12 ? "PM" : "AM";
  // 12 hour Format
  // let  hour =hour % 12 || 12;
  // add zeros

  // output time
  time.innerHTML = ` ${hour}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} 
  ${showAmPM ? amPm : ""} `;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    greeting.textContent = "GoodMorning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon ";
    document.body.style.color = "white ";
  } else {
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  }
}

// get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = ":Enter Name";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
// set Name
function setName(e) {
  if (e.type === "keypress") {
    // make sure that enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure that enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

showTime();
setBgGreet();
