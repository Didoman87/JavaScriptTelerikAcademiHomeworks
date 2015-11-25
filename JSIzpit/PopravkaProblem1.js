
function solve(params) {
    var N = parseInt(params[0], 10),
        K = parseInt(params[1], 10),
        ss = params[2].split(' '),
        i, j,
        min,max,
        //ss = numbersAsString.split(' '),
        gg = [],sum = 0;

for( i = 0; i <= N-K; i+=1) {
    max = -9999999999999;
    min = 999999999999;
    for ( j = i; j < i+K; j+=1) {
        //console.log(i+K);
        //console.log(ss[j]);
       // if(ss[j] != undefined) {

            if (max < +ss[j]) {
                max = +ss[j];

            }
            if (min > +ss[j]) {
                min = +ss[j];
            }
            //console.log(min,max);
        }

   // }
    sum = min + max;
    sum = sum.toString();
    gg[i] = sum;

    //console.log(typeof (sumString));
    //sumString += sumString.join();
    //console.log(result);
}
    //console.log(parseInt('+12.12'));
    console.log(gg.join(','));
}

var exam1 = [4,2,'1 3 1 8'];
var exam2 = [5,3,'7 7 8 9 10'];
var exam3 = [8,4,'1.2 10000000000 -8 4 2 9.4 8 -10000000000'];
solve(exam1);