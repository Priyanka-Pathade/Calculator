const lightTheame ="./Styles/Light.css";
const DarkTheame ="./Styles/Dark.css";
const sunIcon = "./assets/SunIcon.png";
const moonIcon = "./assets/MoonIcon.png";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
// Displays entered value on screen.
function liveScreen(enteredValue){
    if(!res.value){
        res.value = "";
    }
    res.value +=enteredValue;
}