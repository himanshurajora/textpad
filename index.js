"use strict";

/**
 * Function to add padding in the left side of the input
 * @param {number | string} input the input number to apply the padding on - (can be of any length)
 * @param {number} length the lenght that you want the input to be of - (can be any positive integer number or natural number), @default - 3
 * @param {number | string} text the number or text that will be used to pad - (can be ony the lengh of 1), @default - 0
 * @returns {string} the output after appling the padding
 * @summary This funciton applies the padding on left side of the input using the given length and given text to pad
 * The given text's length should not be more than 1
 * @example 
 * - code 
 * const vtextpad = require("vtextpad")
 * const input = 12
 * const ouput = vtextpad.leftpad(12, 3, '0')
 * console.log(output)
 * 
 * *****
 * output : 
 * 012
 * 
 * @author Himanshu Jangid
 * @license MIT
 */
function leftpad(input, length = 3, text = '0') {
    
    var output = input;
    var pad = text.toString();
    while (output.toString().length < length) {
        output = pad + output;
    }

    return output
}


/**
 * Function to add padding in the right side of the input
 * @param {number | string} input the input number to apply the padding on - (can be of any length)
 * @param {number} length the lenght that you want the input to be of - (can be any positive integer number or natural number), @default - 3
 * @param {number | string} text the number or text that will be used to pad - (can be ony the lengh of 1), @default - 0
 * @returns {string} the output after appling the padding
 * @summary This funciton applies the padding right side of the input using the given length and given text to pad
 * The given text's length should not be more than 1
 * @example 
 * - code 
 * const vtextpad = require("vtextpad")
 * const input = 12
 * const ouput = vtextpad.rightpad(12, 3, '0')
 * console.log(output)
 * 
 * *****
 * output : 
 * 012
 * 
 * @author Himanshu Jangid
 * @license MIT
 */
function rigthpad(input, length = 2, text = '0') {
    
    var output = input;
    var pad = text.toString();
    while (output.toString().length < length) {
        output += pad
    }

    return output
}


module.exports = {leftpad, rigthpad}