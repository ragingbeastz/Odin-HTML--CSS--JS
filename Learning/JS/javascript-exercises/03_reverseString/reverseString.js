const reverseString = function(input) {

    let text = String(input);
    let output = "";

    for(let i = text.length-1; i >= 0; i--){
        output = output + text.charAt(i);
    };

    return output;

}

// Do not edit below this line
module.exports = reverseString;
