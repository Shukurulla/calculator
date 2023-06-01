const btns = document.querySelectorAll("#btn");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll("#operator");
const backSpace = document.querySelector(".delete");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    display.value += btns[i].value;
    if (display.value == "Infinity") {
    }
  });
}

const btnValue = ["*", "/", "+", "-"];

operators.forEach((item, idx) => {
  item.value = btnValue[idx];
});

operators.forEach((item, idx) => {
  item.addEventListener("click", () => {
    const endLetter = display.value.slice(
      display.value.length - 1,
      display.value.length
    );
    if (display.value == "") {
      operators[3].value = "-";
    }
    if (
      endLetter === "+" ||
      endLetter === "-" ||
      endLetter === "*" ||
      endLetter === "/"
    ) {
      item.value = "";
      item.value = btnValue[idx];
    } else {
      display.value += item.value;
    }
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});
equal.addEventListener("click", () => {
  display.value = eval(display.value);
});

backSpace.addEventListener("click", () => {
  const backWord = display.value.slice(0, display.value.length - 1);
  display.value = backWord;
});

const date = new Date();
console.log(date);
