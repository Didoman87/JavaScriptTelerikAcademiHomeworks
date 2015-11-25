var a = [33,44,55,66,11,34,55,66,77,56,43,22,43,45,66,21,34,99,45,87,98,67,43,67],
    min = 0,max = 0,i;
for (i = 0; i< a.length; i+=1) {
    if( a[min]>a[i]) {
        min = i;
    }
    if( a[max]<a[i]) {
        max = i;
    }
}
console.log('Minimum Number is :' + a[min],'Maximum number is :' + a[max]);
