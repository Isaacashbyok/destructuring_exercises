//1. 8, 1846

//2 {yearNeptuneDiscovered: 1846, yearsMarsDiscovered: 1659}

//3 Your name is Alejandro and you like purple, Your name is Melissa and you like green, Your name is undefined and you like green

//4 Maya, Marisa, Chi

//5 'Raindrops on roses', 'whiskers on kittens', ['Bright copper kettles', 'warm woolen mittens', 'Browm paper packages tied up with strings']
//6 [10,30,20]

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;

//es2015 Object Destructuring

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

//

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//es2015 Array swap with destructuring

[arr[0], arr[1]] = [arr[1], arr[0]];

//race results

raceResults(['Tom','Margaret','Allison','David','Pierre']);

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})