var massOfMark = 78;
var heightOfMark = 1.69;
var massOfJohn = 92;
var heightOfJohn = 1.95;
var BMIOfMark = massOfMark/(heightOfMark**2);
var BMIOfJohn = massOfJohn/(heightOfJohn**2);
if(BMIOfJohn > BMIOfMark) {
    console.log("John's BMI(" + BMIOfJohn + ") is higher than Mark's(" + BMIOfMark + ")");
}
else {
    
    console.log("Mark's BMI(" + BMIOfMark + ") is higher than John's(" + BMIOfJohn + ")");

}
