var format = require('./format')
//IF STATEMENTS
//if(*some condition is true*){
//	*do something
//}	else {
// 		*do something else
//}
format.h1("EXCERSISES");
format.h2("2.2 - A Basic Conditional");
var num = 10;
while(num>0){
	if(num % 2 == 0) {
		console.log(num);
	} else {
	}
	num--;
}
format.h2("2.3 - Using Boolean Flags in Conditionals");
var parkIsOpen = true;
if(parkIsOpen){
	console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
	console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}
format.h2("2.4 = A Loopy Problem");
format.h1('else ifs')
totalTrains = 12;
operationalTrains = 8;
expressTrain = 10;
for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
	if(trainNumber <=operationalTrains) {
	console.log("Train #"+trainNumber+" is running.");
	} else if (trainNumber == expressTrain){
		console.log("Train #"+trainNumber+" begins running at noon.");
	} else {
		console.log("Train #"+trainNumber+" is not operational.");
	}
}

format.h1('Nested Conditionals')
var square = true;
var color = '';
var big = true;
if (square) {
	if (big) {
		color = "red"
	} else {
		color = "blue"
	}
	console.log(color);
} else {
	console.log("not even a square")
;}
format.h1('Train problem')
totalTrains = 12;
operationalTrains = 8;
expressTrain = 10;

if (operationalTrains > 0) {
	if (operationalTrains == totalTrains){
		console.log("All trains are running at the Javascript Express!");
	} else {
		for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
			if(trainNumber <=operationalTrains) {
			console.log("Train #"+trainNumber+" is running.");
			} else if (trainNumber == expressTrain){
				console.log("Train #"+trainNumber+" begins running at noon.");
			} else {
				console.log("Train #"+trainNumber+" is not operational.");
			}
		}
	}
} else {
	console.log("No trains are operational today")
}
format.h1('EXERCISES');
format.h2('2.5 - Problem Solving with Conditionals');
var numSheep = 4;
var monthsToPrint = 12;
for(var monthNumber = 1; monthNumber<=monthsToPrint; monthNumber++){
	if (numSheep > 10000) {
		numSheep = numSheep / 2;
		console.log('Removing '+numSheep+' sheep from the population. Phew!');
	} 
		numSheep *=4;

	console.log("There will be "+ numSheep + " sheep after " + monthNumber + " month(s)!");
}
format.h1('2.6 - Loop Echo')
format.h2('Trains for dayz')
totalTrains = 12;
operationalTrains = 8;
expressTrain = 10;
dayOfWeek = "Friday";

if (operationalTrains > 0) {
	if (operationalTrains == totalTrains){
		console.log("All trains are running at the Javascript Express!");
	} else {
		for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
			if(trainNumber <=operationalTrains && trainNumber != 3) {
			console.log("Train #"+trainNumber+" is running.");
			} else if (trainNumber == expressTrain || trainNumber == 12){
				console.log("Train #"+trainNumber+" begins running at noon.");
			} else if (trainNumber == 3 && dayOfWeek == "Sunday"){
				console.log("Train #3 is running");
			} else {
				console.log("Train #"+trainNumber+" is not operational.");
			}
		}
	}
} else {
	console.log("No trains are operational today")
}
format.h1('EXERCISES');
format.h2('2.7 - TOO Many Sheep');
var numSheep = 4;
var monthsToPrint = 12;
for(var monthNumber = 1; monthNumber<=monthsToPrint; monthNumber++){
	if (monthNumber %4 == 0) {
		var sheepRemoved = numSheep * 0.75;
		numSheep = numSheep - sheepRemoved;
		console.log('Removing ' + sheepRemoved+' sheep from the population. Phew!')
	} else if (numSheep == 10000) {
		numSheep = numSheep / 2;
		console.log('Removing '+numSheep+' sheep from the population. Phew!');
	}
		numSheep *=4;

	console.log("There will be "+ numSheep + " sheep after " + monthNumber + " month(s)!");
}
format.h2('2.8 - Some Dam Complex Conditionals!');
var totalGen = 19;
var megaWatts = 0;
var totalMW = 0;
var powerOn = false;

for(var currentGen = 1; currentGen <= totalGen; currentGen++){
	if (currentGen % 2 == 0) {
		powerOn = true;
	} else {
		powerOn = false;
	}
	if (powerOn) {
		if (currentGen <=4){
			megaWatts = 62; 
		} else if (currentGen >= 5) {
			megaWatts = 124;
		}
		totalMW += megaWatts;
		console.log("Generator #"+currentGen+" is on, adding "+megaWatts+" MW, for a total of "+totalMW+" MW!");
	} else {
		console.log("Generator #"+currentGen+" is off.");
	}
}