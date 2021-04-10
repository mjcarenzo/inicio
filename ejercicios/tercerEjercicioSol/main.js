/*
    1.Implementar localmente la clase Person y Teacher, con la herencia correspondiente 
      tal cual el material de MDN mencionado, usando ECMAScript 2015
*/

class Person {
    constructor( firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, subject){
        super (firstName, lastName, age);
        this.subject = subject;
    }
}

/* 
    2.Crear una nueva clase Student que herede de Person con las mismas características que Teacher
        1.Además de compartir características con Teacher, vamos a agregar las siguientes propiedades a la clase Student: homework y exams
        2.Implementar getters y setters para homework y exams
        3.Construir objetos nuevos para cada clase (student, teacher y person por separado)
*/

class Student extends Person {
    constructor(firstName, lastName, age, career){
        super (firstName, lastName, age);
        this.career = career;
    }

    static homework = 'english';
    static exams = 'math';

    getHomework(){
        return this.homework;
    }
    setHomework(str){
        this.homework = str;
    }
    getExams(){
        return this.exams;
    }
    setExams(str){
        this.exams = str;
    }
}

const person1 = new Person('Juan', 'Perez', 22);
const teacher1 = new Teacher('Maria', 'Teresa', 40, 'math');
const student1 = new Student('Matias', 'Carenzo', 35, 'Desarrollo de Software');

/*
    3.Modificar la clase Person con dos métodos nuevos: eating() y sleeping() con sus respectivas variables de clase (eat y sleep).
        1.Construir objetos nuevos de teacher y de student usando los métodos nuevos agregados en Person: eating() y sleeping()
*/

Person.prototype.eating = function(){
    return console.log(`Hi im ${this.firstName}, and im eating`);
}
Person.prototype.sleeping = function(){
    return console.log(`Good bye im ${this.firstName}, and im going to sleep`);
}
/*
Como hacer esto de las variables?
let eat = Person.eating;
let sleep = Person.sleeping;
*/

const teacher2 = new Teacher('Rosa', 'Morena', 37, 'english');
teacher2.eating();
const student2 = new Student('Juan', 'Martinez', 21, 'Gym Artist');
student2.sleeping();


/*
Dada la siguiente colección
*/
const items = [
  { description: 'Tomates', quantity: 1, price: 3, total: 55 },
  { description: 'Cebolla', quantity: 3, price: 5, total: 5.5 },
  { description: 'Zanahoria', quantity: 2, price: 6, total: 17 },
  { description: 'Zapallo', quantity: 2, price: 9, total: 17 }
];

//1.- Mostrar total de items
const totalItems = function(arrayObj) {
    return (arrayObj
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity
    }, 0));
}
console.log(totalItems(items));

//2.- Mostrar precio sumado de todos los ítems
const sumOfPrices = function(arrayObj) {
    return (arrayObj
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total
    }, 0));
}
console.log(sumOfPrices(items));

//3.- Mostrar sólo los ítems que contengan la property quantity igual a 2
const showQuantity2 = items.filter(num => num.quantity === 2);
console.log(showQuantity2);

//4.- Mostrar un ítem con quantity igual a 3
const find1 = items.find(el => el.quantity === 3);
console.log(find1);

/*
Dada la siguiente colección:
*/
const persons = [
  { name: 'Maria', age: 59 },
  { name: 'Juan', age: 29 },
  { name: 'Pedro', age: 29 },
  { name: 'Pedro', age: 59 },
  { name: 'Pedro', age: 29 }
];

//1.- Agrupar personas por edad, de manera que el resultado muestre { 29: 3, 59: 2 }
function groupPeopleByAge(arrayObj) {
    const result = arrayObj.reduce((accumulator, currentValue) => {
        // Accumulator is an object, 
        if(accumulator[currentValue.age] !== undefined) {
            accumulator[currentValue.age] = accumulator[currentValue.age] + 1;
        } else {
            accumulator[currentValue.age] = 1;
        }
        return accumulator;
    }, {}); 
// important the initial value of accumulator is an empty object
    console.log(result);
}
groupPeopleByAge(persons);

//2.- Mostrar la primer persona de 29 años
const first29 = persons.find(el => el.age === 29);
console.log(first29);

//3.- Mostrar solo las personas con edad 59
const showAge59 = persons.filter(num => num.age === 59);
console.log(showAge59);


/*
Bonus
Crear clase Item con constructor, getter, settter y al menos un metodo que retorne el resultado de algunas de las funciones implementadas
con reduce, map, filter o find (ejemplo: getItemsTotal()).
La clase deberá tener las propiedades del objeto del enunciado anterior.
*/

class Item {
    constructor(description, quantity, price, total){
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
    }
    
    getQuantity(){
        return this.quantity;
    }
    
    setQuantity(num){
        this.quantity = num;
    }

    getPrice(){
        return this.price;
    }
    setPrice(num){
        this.price = num;
    }

    getTotal(){
        return this.total;
    }
    setTotal(num){
        this.total = num;
    }
    // faltaba el return (pero sigo teniendo un error)
    findItemByQuantity(arrObj, value) {
        return arrObj.find(el => el.quantity === value);
    }
}

const listItems = [];
listItems.push(new Item('banana', 3, 5, 2));
listItems.push(new Item('pera', 4, 15, 1));
listItems.push(new Item('manzana', 1, 2, 3));
listItems.push(new Item('uva', 20, 3, 7));
console.log(listItems.forEach(obj => obj.findItemByQuantity(listItems, 3)));
console.log(listItems[0] instanceof Item);
console.log(listItems);

/*
Bonus 2
Crear clase Person con constructor, getter, settter y al menos un metodo que retorne el resultado de algunas de las funciones implementadas 
con reduce, map, filter o find (ejemplo: getYoungPeople()).
La clase deberá tener las propiedades del objeto del enunciado anterior.
*/
class Person2 {
    constructor(firstName, lastName, age, gender){
        this.name = {
            firstName,
            lastName
        };
        this.age = age;
        this.gender = gender;
    }
    getFirstName(){
        return this.firstName;
    }
    
    setFirstName(str){
        this.firstName = str;
    }

    getLastName(){
        return this.lastName;
    }
    setLastName(str){
        this.lastName = str;
    }

    getAge(){
        return this.age;
    }
    setAge(num){
        this.age = num;
    }

    getGender(){
        return this.gender;
    }
    setGender(str){
        this.gender = str;
    }
    getYoungPeople(arrayObj, value){
        arrayObj.filter(num => num.age < value);
    }
}

const listPerson2 = [];
listPerson2.push(new Person2('Maria', 'Rosa', 52, 'Femenino'));
listPerson2.push(new Person2('Matias', 'Ramos', 15, 'Masculino'));
listPerson2.push(new Person2('Mirta', 'Legrand', 93, 'Femenino'));
listPerson2.push(new Person2('Juan', 'Perez', 20, 'Masculino'));
console.log(listPerson2);
