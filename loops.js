var format = require('./format')
//While loop
//
//while(*some expression is true*){
//	*do this code*
//}
//
format.h1('WHILE LOOPS');
format.h2('Printing 1-5');
var number = 1;
while(number <= 5) {
	console.log(number);
	number++;
}
format.h2('Print train shit');
var trainNumber = 1;
while(trainNumber <= 8) {
	console.log("Train #"+trainNumber+" is running.");
	trainNumber++;
}
format.h2('Sheep pop');
	var numSheep = 4;
	var monthNumber = 1;
	var monthsToPrint =12;
	while(monthsToPrint >=1){
		numSheep = numSheep*4;
		console.log("There will be "+numSheep+" sheep after "+monthNumber+" month(s)!");
		monthsToPrint--;
		monthNumber++;
	}
//FOR loop
//for(*start with this*;*loop if this expression is true*;*do after loop*){
//*do something*
//}

format.h1('FOR loops')

format.h2('Trains operational with for loops')
var trainsOperational = 8;
for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
	console.log("Train #"+trainNumber+" is running.");
}
format.h2('Printing numbers in descending order')
for(var number = 5; number > 0; number--) {
	console.log(number);
}

format.h2('Trains arent running')
var trainsOperational = 8;
var totalTrains = 12;
for(var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++ ){
	console.log("Train #"+stoppedTrain+" is running.");
}

format.h1('EXERCISES')
format.h2('1.5');
for(var number = 10; number >=1; number--) {
	console.log(number);
}
format.h2('1.6');
var numSheep = 4;
var monthsToPrint = 12;
for(var monthNumber = 1; monthNumber<=monthsToPrint; monthNumber++){
	numSheep *=4;
	console.log("There will be "+ numSheep + " sheep after " + monthNumber + " month(s)!");
}
format.h2('1.7 - These Dam Loops!');
var currentGen = 1;
var totalGen = 19;
var megaWatts = 0;
var totalMW = 0;
while(currentGen <=4) {
	megaWatts = 62;
	totalMW += megaWatts;
	console.log("Generator #"+currentGen+" is on, adding "+megaWatts+" MW, for a total of "+totalMW+" MW!");
	currentGen++;
}
for(var currentGen = 5; currentGen <=totalGen; currentGen++){
	megaWatts = 124;
	totalMW = totalMW +=megaWatts;
	console.log("Generator #"+currentGen+" is on, adding "+megaWatts+" MW, for a total of "+totalMW+" MW!");
}
format.h1("CONDITIONAL CANYON");
format.h2("Trains again");

totalTrains = 12;
operationalTrains = 8;
for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
	if(trainNumber <=operationalTrains) {
	console.log("Train #"+trainNumber+" is running.");
	} else {
		console.log("Train #"+trainNumber+" is not operational.");
	}
}
