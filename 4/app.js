/*let i = 75;
while ( i <= 100 ) {
    console.log(i);
    i++;
}

let j = 100;
while ( j >= 75 ) {
    console.log(j);
    j--;
}*/

/*let n = 105;
while ( n <= 670) {
    if ( n % 10 == 0) {
        console.log(n);
    } 
    n += 5;   
}*/


/*let num = Math.floor(Math.random() * 9) + 1;
console.log(num);
switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
}*/

let city1 = {
    name: "ГородN",
    population: 100000,
    getInfo: function() {
        console.log("В городе " + this.name + " проживает " + this.population + " человек");
    },
}

let city2 = {
    name: "Kharkiv",
    population: 2000000,
    getInfo: function() {
        console.log("В городе " + this.name + " проживает " + this.population + " человек");
    },
}

//console.log(city1.name + " с численностью населения " + city1.population);
//console.log("А город " + city2.name + " с численностью населения " + city2.population);

let arr = [];

arr.push(city1, city2);

console.log(arr);

for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i].getInfo());
}

