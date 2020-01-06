// var firstName = 'John';
// var age = 23;
// console.log(firstName + ' ' + age);

// var yearJohn, now, ageJohn, ageMark;
// yearJohn = 2020 - 20;
// console.log(yearJohn);
// ageJohn = 23;
// ageMark = 25;
// now = 2020;

// bornJohn = now - ageJohn;
// bornMark = now - ageMark;

// alert('John born on :' + bornJohn);
// var markolder = ageMark > ageJohn;
// console.log(markolder);

// var x, y;
// x = (3 + 5) * 4 - 6;
// console.log(x);



var johnMass, johnHeight, markMass, markgeight;
johnMass = 65;
johnHeight = 1.68;
markMass = 60;
markgeight = 1.65;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markgeight * markgeight);
console.log('BMI john : ' + johnBMI);
console.log('BMI mark : ' + markBMI);
var BMI = johnBMI < markBMI;
console.log('BMI john < BMI mark : ' + BMI);