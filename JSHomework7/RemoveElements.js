
(function(){
    var someArray = [1,2,1,4,1,3,4,1,111,3,2,1,'1'],
        elementToRemove = 1;

    Array.prototype.remove = function (element) {
        var index = this.indexOf(element);

        while (index > -1) {
            this.splice(index, 1);
            index = this.indexOf(element);
        }
    };

    console.log("REMOVE ELEMENTS");
    console.log("Original array:", someArray);
    someArray.remove(elementToRemove);
    console.log("Array after removal:", someArray);

}());