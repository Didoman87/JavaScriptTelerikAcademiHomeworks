var min = 0,max = 0,i,obj = 'document';
for(i in obj) {
    if(!min){
        min = i;
    }
    if(!max){
        max = i;
    }

    if(i < min){
        min = i;
    }

    if(i > max){
        max = i;
    }
}
console.log('min: ' + min);
console.log('max: ' + max);


var min = 0,max = 0,i,obj = 'window';
for(i in obj) {
    if(!min){
        min = i;
    }
    if(!max){
        max = i;
    }

    if(i < min){
        min = i;
    }

    if(i > max){
        max = i;
    }
}
console.log('min: ' + min);
console.log('max: ' + max);


var min = 0,max = 0,i,obj = 'navigator';
for(i in obj) {
    if(!min){
        min = i;
    }
    if(!max){
        max = i;
    }

    if(i < min){
        min = i;
    }

    if(i > max){
        max = i;
    }
}
console.log('min: ' + min);
console.log('max: ' + max);