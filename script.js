const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialsChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100").replace("x","*"));
  } else if (btnValue === "RESET") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  }
   else {
    if (output === "" && specialsChars.includes(btnValue)) return;

    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => (calculate(e.target.dataset.value)))
})
