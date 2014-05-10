//var format = require("./format");

//format.h1("FUNCTIONS");

function cubeSum(a, b){
	return a*a*a + b*b*b;
}

//console.log(cubeSum(4, 5))

function multiplyTrio(a,b,c){
	return a*b*c
}

function maxOf2(a,b){
	if(a>=b){
		return a
	}else{
		return b
	}
}

//console.log(maxOf2(5,5))

function countE(){
	var phrase = prompt("Which phrase would you like to examine");
	if (typeof(phrase) != "string") {
		alert("Thats not a valid entry!");
		return false;
	} else{
		var eCount = 0;
		for(var index = 0; index < phrase.length; index++){
			if (phrase.charAt(index)=='e' || phrase.charAt(index)=='E') {
				eCount++;
			}
		}
		alert("there are "+eCount+" E's in phrase")
		return true;
	}
}

//countE();

function feedPerRanger(sheepPop, rangers) {
	var food = 2;
	var sheepPer = sheepPop / rangers;
	alert("Each Park Ranger should load "+sheepPer*2+ "lb(s) of feed into his/her BART today.")
}

//feedPerRanger(100, 2);

function changePowerTotal(powerGenerated, generatorID, generatorStatus, generatorPower) {
	if (generatorStatus == "on"){
		powerGenerated += generatorPower;
		alert("Generator #"+generatorID+" is now on, adding "+generatorPower+" MW, for a total of "+powerGenerated+" MW!");
	} else if (generatorStatus == "off") {
		powerGenerated -= generatorPower;
		alert("Generator #"+generatorID+" is now off, removing "+generatorPower+" MW, for a total of "+powerGenerated+" MW!");
	}
	return powerGenerated;
}

changePowerTotal(150, 2, "on", 60)