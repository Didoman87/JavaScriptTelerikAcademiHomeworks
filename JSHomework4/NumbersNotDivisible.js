var i;
for( i = 1; i < 100; i+=1) {
    if( !(i % 3 ||  i % 7) ) {
        console.log(i);
    }
}