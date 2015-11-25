var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    i,
    len,
    brr = [arr[0]],
    maxSequence = [arr[0]];
len = arr.length;
for (i = 1; i < len; i+=1) {
    if(brr[0] === arr[i]) {
        brr.push(arr[i]);
    } else {
        brr = [arr[i]];
    }
    if (brr.length > maxSequence.length) {
        maxSequence = brr;
    }
}
console.log(maxSequence.join(', '));