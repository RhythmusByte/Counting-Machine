const countBtn = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

decreaseBtn.onclick = function () {
  count--;
  if (count < 0) {
    window.alert("Are you kidding me? 😐");
    count++;
  }
  else {
    countBtn.textContent = count;
  }
}

resetBtn.onclick = function () {
  if (count == 0) {
    window.alert("What you are upto? 🧐")
  }else {
    count = 0;
    countBtn.textContent = count;
  }
  countBtn.textContent = count;
}

increaseBtn.onclick = function () {
  count++;
  countBtn.textContent = count;
}
