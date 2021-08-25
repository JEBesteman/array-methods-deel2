// A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = superheroes.find((superheroes) => {
  return superheroes.name === "Spiderman";
});
// Hier komt jouw functie

console.log(findSpiderMan);
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//of
// const findSpiderMan = function(superheroes) {
//     return superheroes.find(function(superheroes) {
//         return superheroes.name === "Spiderman";
//     });
// };

// console.log((findSpiderMan(superheroes)));

//B In een array met integers.
//Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

// const values = [1, 2, 3];

// const doubleArrayValues = values.map((x) => x * 2);

// console.log(doubleArrayValues);
// result should be [2, 4, 6]

//of met forEach

const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3])); 
// result should be [2, 4, 6]

// C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.
//met .some method
// some((element) => { ... } )
const containsNumberBiggerThan10 = function (array) {
  return array.some((number) => {
    return number > 10;
  });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
//met includes() method
const isItalyInTheGreat7 = function(array) {
    return array.includes("Italy");
}

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) );
// result should be true

// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.
const tenfold = function(array){
    let newArrayTenfold = [];
    array.forEach(number => {
        newArrayTenfold.push(number * 10);
    });
    return newArrayTenfold;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.
// every() method
const isBelow100 = function(array) {
    return array.every(number => number < 100);
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));
// result should be: false


//BONUS!!
// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = numbers.reduce((accumulator, number) => {
    return accumulator + number;
});

console.log(bigSum);
// result 1118
//of
const numbers2 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum2 = function(array) {
    return numbers2.reduce((acc, number) => {
        return acc + number;
    });
};
console.log("Big sum, add all numbers in array:", bigSum2(numbers2));
// result should be 1118