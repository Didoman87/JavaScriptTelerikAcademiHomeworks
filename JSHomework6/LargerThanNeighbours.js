var a = [1,2,3,4,5,6,7,4,3,2,3,4,5,6,4,3,4,6,4,3,45,6,6];


function neighbours(arr) {
    var i;
    for(i=0; i < arr.length; i+=1) {
        if (arr[i] < arr[i+1]) {
            if (arr[i+1] > arr[i+2]) {
                console.log(arr[i] + '<' + arr[i+1] + '>' + arr[i+2])
            }
        }
    }
}
neighbours(a);