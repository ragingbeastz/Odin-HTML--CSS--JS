const sumAll = function(numberA,numberB) {
    if (numberA < 0 || numberB < 0 ||  
        Number.isInteger(numberA) == false || Number.isInteger(numberB) == false
        ){
        return "ERROR";
    }

    let smallerNumber;
    let higherNumber;

    if (numberA >= numberB){
        higherNumber = numberA;
        smallerNumber = numberB;
    }

    else {
        higherNumber = numberB;
        smallerNumber = numberA;
    }

    let total = 0;

    for (let i = smallerNumber; i <= higherNumber ; i++){
        total = total + i; 
    }

    return total
}

// sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;
