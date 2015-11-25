



//  IT'S READY TO GO !!! SAMO Q RUNNETE  V SREDATA VI ZA COMPILIRANE





var n = 1,tmp = 2;
if( (n > 1 && n < 100 )) {              //proverqva dali n e m/u 1 i 100
    for (var i = 2; i < n; i++){        //varti cikal n-2 pati ako ostataka e
        if ( (n % i)) {                 // raven na 0 (false) izpalnqva elsea i
            tmp += 1;                   //breakva, inache natrupva opitite b tmp
                                        //ako broq opiti +2 e raven na n to
        } else {                        //n se deli samo na 1 i na sebe si !
            console.log(n, false);break;
        }
    } if( tmp ==  n ) console.log( n, true);
}else {
    console.log(n, false);
}


//Sajalqvam za slojnotiikata dano q razberete imaiki predvid che vsi4ko za po lesno
//sam go vzel s kratki bukvi !