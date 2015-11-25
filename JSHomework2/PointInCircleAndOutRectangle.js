




//  IT'S READY TO GO !!! SAMO Q RUNNETE  V SREDATA VI ZA COMPILIRANE





var r = 3,x = 4,y = 1,yes = 'yes',no = 'no';
if ( x ==0 || y ==0) {
    console.log(x, y, no);
}else {
    if (((x - 1) * (x - 1) + ((y - 1) * (y - 1))) <= r * r) {
        if (( x > 1 || x < 6) && (y > -1 || y < 2)) {

            console.log(x, y, yes);
        } else {
            console.log(x, y, no);
        }
    } else {
        console.log(x, y, no);
    }
}

//Testvah vsi4kite primerni stoinosti za x i y i sa sashtite kato v Example
//S izkluchenie na x=4 i y=1 Az poluchavam Yes zashtoto spored kriteriq vliza
//v kraga i e otvanka na pravouganlnika ,nz dali e kade mi e greshkata ili prosto
// si e greshka v uslovieto ,no nqmam i bez tova pove4e vreme da q 4ovarkam tazi zadacha
// nqma da se uchuda ako nqkade sam obarka l "||" ili "&&" ,no tova e kakvoto mojah za
// tova vreme :D !!!!





//var r = 3,x = 1,y = 4//,yes = 'yes',no = 'no';
//if (((x - 1)*(x - 1) + ((y - 1)*(y - 1))) <= r*r) {
//    if( x >= 1 && x <= 6) {
//        if (y >= -1 && y <= 2) {
//            console.log(x, y, yes);
//        } else {
//            console.log(x, y, no);
//        }
//    }else {
//        console.log(x, y, no);
//    }
//
//} else {
//    console.log(x, y, no);
//}
//