//En lo posible usar funciones flechita, map, filter template stringsy los metodos que vimos en la clase.

/*[1.The team]
En este ejercicio, se recibirá el nombre de equipo e integrantes como parámetros de la función, 
formar el siguiente mensaje en la consola con estos datos de entrada:
Datos de entrada:
teamName: 'formacion'
people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
Resultado:
Hay 6 personas en el equipo de formacion.
Ellos son: Amalia, Karla, Silvana, Manu, Jonh, Mike.
*/

function formation(teamName, members) {
    let message = `Hay ${members.length} personas en el equipo de ${teamName}. \nEllos son: ${members.toString()}.`;
    console.log(message);
}
formation('formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike']);

/*[2.- Square of pairs]
Crear una función que reciba como parámetro un arreglo de números y 
retornar en la consola los elementos elevados al cuadrado solo si se cumple que el número es positivo.
entrada: [2, 4, 6]
salida: 4, 16, 36
entrada: [-3, 2, -8, 12, 5]
salida: -3, 4, -64, 144, 5
entrada: [1, 2, 3, 4, 5]
salida: 1, 4, 3, 16, 5
*/

function squareOfPairs(arrayNum) {
    let newArray = arrayNum.map(num => (num > 0 ? num * num : num));
    console.log(newArray);
}
squareOfPairs([-3, 2, -8, 12, 5]);

/*3. Inventario
Dado un arreglo de objetos como parámetro de una función, conteniendo la categoría y precio del producto, 
retornar el precio total de una categoría indicada.
Hint: Usar los métodos .filter() y .reduce() para lograr el resultado.
totalByCategory(inventory, "beverage");
debe mostrar en cosola: 120
totalByCategory(inventory, "no-existe");
debe mostrar en cosola: 0
*/

const inventory = [{
        category: 'beverage',
        name: 'cocacola',
        price: 70
    },
    {
        category: 'beverage',
        name: 'sprite',
        price: 50
    },
    {
        category: 'car',
        name: 'vw gol',
        price: 50000
    }
];

function totalByCategory(arrayObj, categ) {
    const arrayAux = arrayObj.filter(obj => obj.category === categ);
    const result = arrayAux.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0);
    console.log(result);
}
totalByCategory(inventory, 'beverage');

//console.log(totalByCategory2(inventory, 'beverage'));
/*[4. Capitalize]
Implementa una función que reciba una oración y devuelva cada letra inicial de una palabra en mayúscula.
Entrada: 'laboratoria mexico'
Salida: 'Laboratoria Mexico'
*/

let cap = (str) => str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
console.log(cap('laboratoria mexico'));