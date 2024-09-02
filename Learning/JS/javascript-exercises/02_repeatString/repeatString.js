const repeatString = function(text, amount) {
    let x = text;

    if (amount==0 || text == ""){
        return "";
    }

    else if (amount<0){
        return'ERROR';
    }

    for(let i=0;i < amount-1; i++){
        text = text + x;
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
