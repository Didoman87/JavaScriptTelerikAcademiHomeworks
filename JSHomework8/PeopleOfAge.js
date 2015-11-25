function createPerson(fname, lname, age, gender) {
    if (gender) {
        gender = 'female';

    } else {
        gender = 'male';
    }
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
}
var people = [
   new createPerson('Deyan','Zubev', 28, false),
   new createPerson('Petar','Georgiev', 18, false),
   new createPerson('Georgi','Petrov', 38, false),
   new createPerson('Sasha','Koleva', 28, true),
   new createPerson('Ivan','Ivanov', 48, false),
   new createPerson('Katq','Sirakova', 28, true),
   new createPerson('Maria','Ovcharova', 18, true),
   new createPerson('Dobri','Kojuharov', 28, false),
   new createPerson('Tranka','Bojidarova', 48, true),
   new createPerson('Yordan','Tumbev', 28, false)
];
people.forEach(function(item, index) {
    console.log(index, JSON.stringify(item));
});


var check = people.every(function(item){
    return item.age >= 18;
});
console.log(check);