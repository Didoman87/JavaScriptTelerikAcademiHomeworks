function englishDigit(digit) {
    var number = digit;
    digit = digit % 10;
    switch( digit ) {
        case 0: console.log(number + ' zero');break;
        case 1: console.log(number + ' one');break;
        case 2: console.log(number + ' two');break;
        case 3: console.log(number + ' three');break;
        case 4: console.log(number + ' four');break;
        case 5: console.log(number + ' five');break;
        case 6: console.log(number + ' six');break;
        case 7: console.log(number + ' seven');break;
        case 8: console.log(number + ' eight');break;
        case 9: console.log(number + ' nine');break;
        default : console.log( number + ' not a digit');
    }

}
englishDigit(123);
