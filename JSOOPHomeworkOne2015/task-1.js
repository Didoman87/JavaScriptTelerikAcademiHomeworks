function solve() {
  function sum(numbers) {
    var i, len, element, sum = 0;

    if (!numbers.length) {
      return null;
    }

    for (i = 0, len = numbers.length; i < len; i += 1) {
      element = +numbers[i];

      if (isNaN(element) || element == undefined) {
        throw new Error;
      }
      sum += element;
    }
    return sum;
  }
  return [sum()];
}
