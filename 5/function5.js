let min = +prompt("Введите min число");
let max = +prompt("Введите max число");

let randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(min, max));

//===============================//



let fullArray = function(arrLength) {
    let array = [];
    for (let i = 0; i < arrLength; i++) {
        array[i] = randomNumber(min, max);
    }
    return array;
}

let arrLength = +prompt("Введите длину массива");

console.log(fullArray(arrLength));

//===============================//


let full2DArray = function(arrLength) {
    let array2D = [];
    for (let i = 0; i < arrLength; i++) {
        array2D[i] = [];
        for (let j = 0; j < arrLength; j++) {
            array2D[i][j] = randomNumber(min, max);
        }
    }
    return array2D;
}

let matrix = full2DArray(arrLength);

//console.log(full2DArray(arrLength));
console.log("Матрица: ", matrix);

//===============================//

let showMatrix = function(matrix) {
    let str = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            str += matrix[i][j];
            str += " "; 
        }
        str += "\n";
    }
    return str;
}

console.log(showMatrix(matrix));

//===============================//

let getMaxValueFromMainDiagonal = function(matrix) {
    let maxValue = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (maxValue < matrix[i][i]) {
            maxValue = matrix[i][i];
        }
    }
    return maxValue;
}

console.log("Наибольшее число главной диагонали: ", getMaxValueFromMainDiagonal(matrix));

//===============================//

let mul = function(a, b) {
    return a * b;
}

console.log("Функция mul:", mul());