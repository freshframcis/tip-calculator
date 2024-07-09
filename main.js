const inputEl = document.querySelector("#input");
const btnEl = document.querySelectorAll(".btn");
const customTip = document.querySelector("#customTip");
const errorEl = document.querySelector("#error");
const peopleEl = document.querySelector("#people");
const totalVal = document.querySelectorAll("#tip-value");
const resetEl = document.querySelector("#reset");

let tipVal = 0;
let peopleVal = 1;
let billVal = 0;

inputEl.addEventListener("input", validateBill);
customTip.addEventListener("input", customTipVal);
peopleEl.addEventListener("input", setPeopleVal);
resetEl.addEventListener("click", resetHandler);

// button element
btnEl.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(e) {
  btnEl.forEach((btn) => {
    if (e.target.innerHTML === btn.innerHTML) {
      tipVal = parseFloat(btn.innerHTML) / 100;
    }
  });
  customTip.value = ""
  calculate();
}

// validate our bill
function validateBill() {
  if (inputEl.value.includes(",")) {
    inputEl.value.replace(",", ".");
  }
  billVal = parseFloat(inputEl.value);
  calculate();
}

//custom tip

function customTipVal() {
  tipVal = parseFloat(customTip.value / 100);

  if (customTip.value !== 0) {
    calculate();
  }
}

// set people

function setPeopleVal() {
  peopleVal = parseFloat(peopleEl.value);
  if (peopleVal <= 0) {
    errorEl.innerHTML = "Can't be zero";
    setTimeout(() => {
      errorEl.innerHTML = "";
    }, 2000);
  }
}

//  calculate function

function calculate() {
  if (peopleVal >= 1) {
    let tip = (billVal * tipVal) / peopleVal;
    let totalAmount = (billVal * (tipVal + 1)) / peopleVal;

    totalVal[0].innerHTML = tip.toFixed(2);
    totalVal[1].innerHTML = totalAmount.toFixed(2);
  }
}
// Reset
function resetHandler() {
  inputEl.value = 0;
  validateBill();
  btnEl[2].click()
  peopleEl.value = 1;
  customTip.value = "";
  
  setPeopleVal();
}

