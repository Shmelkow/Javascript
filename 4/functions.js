let arr = [1,2,3,4];

//Функция которая выводит элементы массива arr
let showArray = function() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

showArray();

//Функция которая выводит элементы массива arr
let showSomeArray = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let users = ["Vlad", "Georg", "Danny"];
console.log("====== Функция с параметрами ========");

showSomeArray(users);
showSomeArray(arr);

console.log("====== Функция с возвращением ========");

let getLastElementOfArray = function(array) {
    return array[array.length - 1];
}

console.log(getLastElementOfArray(users));

let regionalCoordination = getLastElementOfArray(users);

console.log("Региональный координатор " + regionalCoordination);


