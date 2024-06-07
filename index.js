const textBox =  document.getElementById("number");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius")
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp =textBox.value;
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "🔸F" 
    }
    else if (toCelsius.checked){
        temp =textBox.value;
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "🔸C" 
    }
    else{
        result.textContent = "Select the unit"
    }
}
