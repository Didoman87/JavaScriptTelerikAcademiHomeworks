var a = [1,2,3,4,5,6,7,4,3,2,3,4,5,6,4,3,4,6,4,3,45,6,6],
    b = [1,1,1,1,1,1,1],
    c = [1,2],
    d = [];


function neighbours(arr) {
    var i;
    arr = arr || [];
    for(i=0; i < arr.length; i+=1) {
        if (arr.length > 2) {
            if (arr[i] < arr[i + 1]) {
                if (arr[i + 1] > arr[i + 2]) {
                    return console.log(arr[i] + '<' + arr[i + 1] + '>' + arr[i + 2]);
                }

            }

        } else {
            return -1;
        }
    }
    return -1;
}
neighbours(a);
