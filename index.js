
function leftpad(input, length = 2, text = '0') {
    
    var output = input;
    while (output.toString().length < length) {
        output = text.toString() + output;
    }

    return output
}

function rigthpad(input, length = 2, text = '0') {
    
    var output = input;
    while (output.toString().length < length) {
        output += text.toString();
    }

    return output
}


console.log(rigthpad(12,5))