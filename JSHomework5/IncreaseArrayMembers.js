var arr, i, len, result;
arr = new Array(20);
for (i = 0,len = arr.length; i <= len; i+=1) {
    arr[i] = i;
    result = arr[i] * 5;
    console.log(result);
}