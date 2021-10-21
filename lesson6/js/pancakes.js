const d = new Date();
const day = d.getDay();

if (day == 5) {
  document.querySelector('.pancakes').style.display = "block";
}