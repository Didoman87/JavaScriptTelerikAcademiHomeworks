var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    i,
    j,
    len,
    tmp = 0,
    value,
    count;
len = arr.length;
for(i=0; i < len; i+=1) {
    count = 0;
    for(j=0; j < len; j+=1 ) {
        if(arr[i] === arr[j]) {
            count+=1;
        }
    }
    if(tmp < count) {
        tmp = count;
        value = arr[i];
    }
}
console.log(value + ' (' + tmp + ' times)');