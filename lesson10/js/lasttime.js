const now = Date.now();
const milsecToDays = 86400000;
const lastTime = document.querySelector("p.lastTime");
let localStorageDate;


if (localStorage.length > 1) {
  localStorageDate = parseFloat(localStorage.getItem("lastDay"));
  const totalTime = (now - localStorageDate) / milsecToDays;
  lastTime.textContent = `Welcome Back! Thank for visiting ${totalTime.toFixed(0)} day(s) ago.`;
  localStorage.setItem("lastDay", now);
} else {
  localStorage.setItem("lastDay", now);
  lastTime.textContent = "Welcome! Glad you came to visit!";
}
