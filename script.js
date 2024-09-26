function bmiCalculator (weight, height) {
    var BMI = Math.round((weight/(height*height))*10)/10;
    if (BMI < 18.5) {
        var interpretation=alert("Your BMI is "+BMI+", so you are underweight.")
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        interpretation=alert( "Your BMI is "+BMI+", so you have a normal weight.");
    }
    else {
        interpretation=alert("Your BMI is "+BMI+", so you are overweight.");
    }
    return interpretation;
}
weight = prompt("Enter your weight in Kilograms");
height = prompt("Enter your height in Meters");
bmiCalculator(weight, height);
