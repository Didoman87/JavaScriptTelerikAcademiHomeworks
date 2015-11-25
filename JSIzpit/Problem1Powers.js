function solve(params) {
    var nk = params[0].split(' ').map(Number),
        s = params[1].split(' ');
    console.log(s);
    //console.log(s); console.log(nk[1]);
        var ss = s[0].split(''),
        i,j,sum = 0,gg = [];
   console.log((ss));
    //console.log('s' + 'b');
    for(j = 0; j < nk[1]; j+=1) {
        gg = [];
        //console.log(typeof(nk[0]));
        for (i = 0; i < nk[0]; i += 1) {
            //console.log(typeof ([i]));
            //console.log(typeof (ss));
            //console.log(typeof (gg));
            //console.log(ss[0]);
            if (ss[i - 1] == undefined) {
               var  prev = ss[(nk[0]) - 1];
                var next = ss[i+1];
            } else if (ss[i + 1] == undefined) {
                //console.log(typeof(ss[-1]));
                var next = ss[0];
                var  prev = ss[i - 1];
            } else {
                 next = ss[i+1];
                  prev = ss[i - 1];
            }
            console.log('blal',prev);
            console.log(next);
                //console.log(typeof(ss[nk[0]]));
                //console.log(ss[+nk[0]]);
                //console.log(typeof (ss[i]));
                if (ss[i] == 0) {
                    //console.log(ss[]);
                    var a = (+prev - +next);
                    console.log(a);
                    a=Math.abs(a);
                    console.log(a);

                    gg[i] = a;
                    continue;
                    //console.log(typeof (a));
                    //console.log(a);
                }
                if (ss[i] == 1) {
                    var b = (+prev + +next);
                    gg[i] = b;
                    //console.log(ss[i]);
                    continue;
                    //console.log(ss[i]);
                }
                if ((ss[i] % 2)) {
                    var c = (Math.min(+prev, +next));
                    gg.push(c);

                    // console.log(ss[i]);
                } else {
                    var d = (Math.max(+prev, +next));
                    gg.push(d);
                    // console.log(d);

                    //console.log(d);

                }
            console.log((gg));

            }

            //console.log((ss));
            ss = gg;
            //console.log((gg));

    }


   console.log(typeof(ss));
   console.log(ss);
   console.log(typeof(gg));
   console.log(gg);
  for(var k=0; k < nk[0]; k+=1) {
      //console.log(ss[k]);
      sum += ss[k];
  }

console.log(sum);
}
var exam2 = ['10 3', '1919191919'];
var exam1 = ['5 1','90241'];
var exam3 = ['10 10', '0123456789'];
solve(exam3);