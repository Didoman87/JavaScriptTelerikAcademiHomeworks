var arr = [1,2,3,4,5],
    x = 3;

function binarySearch(key, masiv, left, right) {
    var index = left + Math.floor((right - left)/2);
    if (key < masiv[index]) {
        return binarySearch(key, masiv, left, index - 1);
    } else if (key > masiv[index]) {
        return binarySearch(key, masiv, index + 1, right);
    } else {
        return index;
    }
}
console.log('posiciqta na ' + x +' v masiva e ravana na:' +
    binarySearch(x, arr, 0, arr.length - 1));