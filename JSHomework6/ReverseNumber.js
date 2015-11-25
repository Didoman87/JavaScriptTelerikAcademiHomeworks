
function reverseNumber(number) {
    var tmp = number.toString();
    var tmp1 = tmp.split("").reverse().join("");
    console.log(Number(tmp1));
}
reverseNumber(123.21);