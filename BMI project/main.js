function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters
  
    var bmi = weight / (height * height);
  
    var result = "";
  
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      result = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      result = "Overweight";
    } else {
      result = "Obese";
    }
  
    document.getElementById("result").innerHTML = "BMI: " + bmi.toFixed(2) + " - " + result;
  }
  