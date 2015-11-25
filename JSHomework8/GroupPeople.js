
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
    new createPerson('Petar','Georgiev', 8, false),
    new createPerson('Georgi','Petrov', 38, false),
    new createPerson('Sasha','Koleva', 28, true),
    new createPerson('Ivan','Ivanov', 8, false),
    new createPerson('Katq','Sirakova', 2, true),
    new createPerson('Maria','Ovcharova', 18, true),
    new createPerson('Dobri','Kojuharov', 17, false),
    new createPerson('Tranka','Bojidarova', 48, true),
    new createPerson('Yordan','Tumbev', 28, false)
];

var sorted = people.reduce(function (obj, item) {

    if (obj[item.fname[0]]) {
        obj[item.fname[0]].push(item);
    } else {
        obj[item.fname[0]] = [item];
    }
    return obj;
}, {});
console.log('Group People ' + JSON.stringify(sorted));