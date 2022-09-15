//Crie um array de números que contenha 8 números.
let array = [1,2,3,4,5,6,7,8]
console.log(array)

//A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const triplo = array.map((numero) => numero*3)
console.log(triplo)

//A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const metades = array.map((numero) => numero/2)
console.log(metades)