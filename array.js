var numberList = [2,5,8,4,7,12,6,9,3,11];

var evenCount = 0;

for (var i =0; i < numberList.length; i++){
	if (numberList[i] % 2 == 0) {
		evenCount++;
	} else
		numberList[i] = undefined;
}

//console.log(numberList);

function addPassenger(name, array) {
	if (array.length == 0) {
		array.push(name);
	} else {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == undefined) {
				array[i] = name;
				return array;
			} else if (i == array.length - 1) {
				array.push(name);
				return array;
			}
		}
	}
}

//var arrList = ["hello", "hi", undefined, "bob"]
//console.log(addPassenger("steve", arrList))

function deletePassenger(name, list) {
	if (list.length == 0) {
		console.log("List is empty");
	} else {
		for (var i = 0; i < list.length; i++) {
			if(list[i] == name) {
				list[i] = undefined;
				return list;
			}	else if (i == list.length - 1) {
				console.log("Passenger not found");
			}
		}
	}
}

var arrList = ["hello", "hi", "barfy", "bob"]
console.log(deletePassenger("hi", arrList))