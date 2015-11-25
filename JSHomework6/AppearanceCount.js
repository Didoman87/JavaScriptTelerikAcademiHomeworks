function countNumber(arr,number) {
    var i,count = 0;arr = arr || [];
    for(i=0; i < arr.length; i+=1) {
        if(arr[i] === number) {
            count+=1;
        }
    }
    return(count);
}

var a = [1,2,3,4,5,6,7,4,3,2,3,4,5,6,4,3,4,6,4,3,45,6,6];
var b = 4;

function test() {
    if(countNumber(a,b) === 6) {
        console.log(true);
    } else {
        console.log(false);
    }
}
test();