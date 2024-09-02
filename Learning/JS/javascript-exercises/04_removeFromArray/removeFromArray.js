const removeFromArray = function(inputArray, ...args) {

    let array = [];
    inputArray.forEach(element => {
        if (!args.includes(element)){
            array.push(element);
        }
    });

    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
