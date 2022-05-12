// console.log("hello world");

let count = 0;
const counterText = document.querySelector(`#counter`);

// console.log(counterText);

function setCounterDisplay() {
  counterText.textContent = count;
}
const plus = document.querySelector(`#plus-btn`);
plus.addEventListener("click", () => {
  count++;
  setCounterDisplay();
});

const minus = document.querySelector(`#minus-btn`);
function decrease() {
  count--;
  setCounterDisplay();
}
minus.addEventListener("click", decrease);

const reset = document.querySelector(`#reset-btn`);
reset.addEventListener("click", () => {
  count = 0;
  setCounterDisplay();
  alert("Are you sure you want to reset the counter?");
});
///////////////////////////////////////////////////////

// function inspectingEvent(e) {
//   console.log(e.target);
// }

// fbBtn.addEventListener('click', inspectingEvent)

const themeBtns = document.querySelectorAll(`.theme-buttons`);

function selectTheme(e) {
  const theme = e.target.textContent;

  document.querySelector(`body`).className = theme;
  document.querySelector(`main`).className = theme;

  const buttons = document.querySelectorAll(`button`);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}

for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", selectTheme);
}
/////////////////////////////////////////////////////////
const inputField = document.querySelector(`#food-input`);
const foodBtn = document.querySelector(`#food-btn`);
const foodList = document.querySelector(`#food-list`);

let newFood = "";

function newFoodHandler(e) {
  newFood = e.target.value;
}

inputField.addEventListener("change", newFoodHandler);

function addNewFood() {
  let newPara = document.createElement("p");
  newPara.textContent = newFood;
  foodList.appendChild(newPara);
}

foodBtn.addEventListener("click", addNewFood);
