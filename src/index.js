module.exports = function getZerosCount(number) {
{
	var fact = 0;
    var result = 0;
	for (var i = 1; i <= number; i++) {
      fact = i;
	    while (fact %5 == 0) {
            fact = fact / 5;
            result++;
    }
    }
    return result;
}
/*
var arrayOfFacrorials = number.split('*');
var arrayOfSingle = [];
var arrayOfDouble = [];
var amountOfTwos = 0;
var amountOfFives = 0;

for (var i = 0; i < arrayOfFacrorials.length; i++)
{
	if (arrayOfFacrorials[i].indexOf('!!') !== -1)
	{
		arrayOfDouble.push(parseInt(arrayOfFacrorials[i]));
	}
	else{
		arrayOfSingle.push(parseInt(arrayOfFacrorials[i]));
	}
}




for (var i = 0; i < arrayOfSingle.length; i++) {
	var factorialOf = arrayOfSingle[i];
	for (var number = 1; number <= factorialOf; number=number+1)
	{
        var currentNumber = number;
		while (currentNumber % 2 === 0) {
			currentNumber = currentNumber / 2;
			amountOfTwos++;
		}
		while (currentNumber % 5 === 0) {
			currentNumber = currentNumber / 5;
			amountOfFives++;
		}
	}
}

for (var i = 0; i < arrayOfDouble.length; i++) {
	var factorialOf = arrayOfDouble[i];
	var isEven = factorialOf % 2 === 0;
	var startIndex = isEven ? 2 : 1;
	for (var number = startIndex; number <= factorialOf; number += 2) {
        var currentNumber = number;
		while (currentNumber % 2 === 0) {
			currentNumber = currentNumber / 2;
			amountOfTwos++;
		}
		while (currentNumber % 5 === 0) {
			currentNumber = currentNumber / 5;
			amountOfFives++;
		}
	}
}
return Math.min(amountOfTwos, amountOfFives);*/
}

