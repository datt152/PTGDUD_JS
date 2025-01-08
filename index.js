var massOfMark = 78;
var heightOfMark = 1.69;
var massOfJohn = 92;
var heightOfJohn = 1.95;
var BMIOfMark = massOfMark/(heightOfMark**2);
var BMIOfJohn = massOfJohn/(heightOfJohn**2);
console.log("JavaScript Fundamentals - Part 1");
console.log("Coding Challenge #1");
console.log("Mark's BMI: " + BMIOfMark);
console.log("John's BMI: " + BMIOfJohn);
console.log("Coding Challenge #2");

var markHigherBMI = BMIOfJohn < BMIOfMark;
if(!markHigherBMI) {
    console.log("John's BMI(" + BMIOfJohn + ") is higher than Mark's(" + BMIOfMark + ")");
}
else {
    
    console.log("Mark's BMI(" + BMIOfMark + ") is higher than John's(" + BMIOfJohn + ")");
}
function calcAverage(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum/array.length;
}
var dolphinsScore = [97, 112, 101];
var koalasScore = [109, 95, 123];
console.log("Coding Challenge #3");

if(calcAverage(dolphinsScore) > calcAverage(koalasScore) && calcAverage(dolphinsScore) >= 100) {
    console.log("Dolphins are the winner of the competition with " +calcAverage(dolphinsScore) + " scores" );
}
else if(calcAverage(koalasScore) > calcAverage(dolphinsScore) && calcAverage(koalasScore) >= 100){
    console.log("Koalas are the winner of the competition with " +calcAverage(koalasScore) + " scores" );
}
else if(calcAverage(koalasScore) == calcAverage(dolphinsScore) && calcAverage(koalasScore) >= 100){
    console.log("Dolphins and Koalas are draw")
} else {
    console.log("No one wins");
}
console.log("Coding Challenge #4");

var bill = 275;
var tip = bill >= 50 && bill <=300 ? bill*0.15: bill*0.2;
var total = bill + tip;
console.log("The bill was " + bill +", the tip was " + tip + ", and the total value " + total);

console.log("JavaScript Fundamentals - Part 2");
console.log("Coding Challenge #1");
function checkWinner(A, B){
    if(A >= 2*B)
        return 1;
    else if(B >= 2 * A)
        return 0;
    else return -1;

}
dolphinsScore = [[44, 23, 71], [85, 54, 41]];
koalasScore = [[65, 54, 49], [23, 34, 27]];
var avgDolphins = calcAverage(dolphinsScore[0]);
var avgKoalas = calcAverage(koalasScore[0]);
console.log(`Data 1:`);

if(checkWinner(avgDolphins,avgKoalas) == 1) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    
}
else if(checkWinner(avgDolphins,avgKoalas) == 0) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

}
else console.log("No one win");
avgDolphins = calcAverage(dolphinsScore[1]);
avgKoalas = calcAverage(koalasScore[1]);
console.log(`Data 2:`);

if(checkWinner(avgDolphins,avgKoalas) == 1) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    
}
else if(checkWinner(avgDolphins,avgKoalas) == 0) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

}
else console.log("No one win");
console.log("Coding Challenge #2");
function calcTip(input) {
    return input >= 50 && input <= 300 ? input * 0.15 : input * 0.2; 
}
var bills = [125, 555, 44]
var tips = [];
var totals = [];
bill = 100.0;
tip = calcTip(bill);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);
for (let index = 0; index < bills.length; index++) {
    tips[index] = calcTip(bills[index]);
    totals[index] = tips[index] + bills[index];
    console.log(`Data ${index + 1}: The bill was ${bills[index]}, the tip was ${tips[index]}, and the total value ${totals[index]}`);
}
console.log("Coding Challenge #3");

const person = {
    fullName: "",
    mass: 0,
    height: 0,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
const markInfo = Object.create(person);
markInfo.fullName = "Mark Miller";
markInfo.mass = 78;
markInfo.height = 1.69;

const johnInfo = Object.create(person);
johnInfo.fullName = "John Smith";
johnInfo.mass = 92;
johnInfo.height = 1.95;

const markBMI = markInfo.calcBMI();
const johnBMI = johnInfo.calcBMI();


let rs = markBMI > johnBMI ? 1 : (markBMI < johnBMI ? -1 : 0);

if (rs === 1) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else if (rs === -1) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} else 
    console.log(`Mark and John have the same BMI (${markBMI})`);
     
console.log("Coding Challenge #4");
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = [];
totals = [];

for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    tips.push(tip);
    totals.push(tip + bills[index]);
}
console.log('Bills:', bills)
console.log('Tips:', tips);
console.log('Totals:', totals);
console.log('Average Total:', calcAverage(totals));
    