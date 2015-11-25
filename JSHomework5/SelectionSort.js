var arr = [1,5,3,4,7,9,4,6,11,55,2,4,5,22,88,44,55,1],
    i,
    j,
    len;
len = arr.length;
for(j=0; j < len; j+=1) {
    for (i = j+1; i < len; i+=1) {
        if (arr[j] > arr[i]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(arr.join(', '));