const lightTheame ="./Styles/Light.css";
const DarkTheame ="./Styles/Dark.css";
const sunIcon = "./assets/SunIcon.png";
const moonIcon = "./assets/MoonIcon.png";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

// Displays entered value on screen.
function liveScreen(enteredValue){
    if(!res.value){
        res.value = "";
    }
    res.value +=enteredValue;
}

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  }