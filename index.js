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
function avg(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum/array.length;
}
var dolphinsScore = [97, 112, 101];
var koalasScore = [109, 95, 123];

if(avg(dolphinsScore) > avg(koalasScore) && avg(dolphinsScore) >= 100) {
    console.log("Dolphins are the winner of the competition with " +avg(dolphinsScore) + " scores" );
}
else if(avg(koalasScore) > avg(dolphinsScore) && avg(koalasScore) >= 100){
    console.log("Koalas are the winner of the competition with " +avg(koalasScore) + " scores" );
}
else if(avg(koalasScore) == avg(dolphinsScore) && avg(koalasScore) >= 100){
    console.log("Dolphins and Koalas are draw")
} else {
    console.log("No one wins");
}

