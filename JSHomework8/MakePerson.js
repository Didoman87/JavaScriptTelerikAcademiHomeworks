function createPerson(fname, lname, age, gender) {
 if (gender) {
     gender = 'female';

 } else {
     gender = 'male';
 }
    return console.log('first name:' + fname + ' last name:' + lname +
    ' age:' + age + ' gender:' + gender);
}
var people = [createPerson('Deyan','Zubev', 28, false),
    createPerson('Petar','Georgiev', 18, false),
    createPerson('Georgi','Petrov', 38, false),
    createPerson('Sasha','Koleva', 28, true),
    createPerson('Ivan','Ivanov', 48, false),
    createPerson('Katq','Sirakova', 28, true),
    createPerson('Maria','Ovcharova', 18, true),
    createPerson('Dobri','Kojuharov', 28, false),
    createPerson('Tranka','Bojidarova', 48, true),
    createPerson('Yordan','Tumbev', 28, false)
];
