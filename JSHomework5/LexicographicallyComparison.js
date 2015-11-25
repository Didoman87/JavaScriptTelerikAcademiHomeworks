var i,arr1 = ['a','g','c','t'],arr2 = ['a','b','c'],len;
len = Math.max(arr1.length,arr2.length);
for (i = 0; i < len; i+=1) {
    if(arr1[i] === arr2[i]) {
        console.log(arr1[i] + ' e ravno na ' + arr2[i]);
    } else {
        console.log(arr1[i] + ' ne e ravno na ' + arr2[i]);
    }
}
