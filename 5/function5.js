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

let matrixElement1 = matrix[randomNumber(0, arrLength - 1)][randomNumber(0, arrLength - 1)];

let matrixElement2 = matrix[randomNumber(0, arrLength - 1)][randomNumber(0, arrLength - 1)];

console.log("Элемент матрицы: ", matrixElement1);
console.log("Элемент матрицы: ", matrixElement2);

let mul = function(a, b) {
    return a * b;
}

console.log("Функция mul:", mul(matrixElement1, matrixElement2));

//===============================//

let operations = function(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return alert("Введите правильно математическую операцию");
    }
}
let operation = prompt("Введите математическую операцию");

 console.log("Функция operations:", operations(matrixElement1, matrixElement2, operation));

//===============================// 

let functionForArray = function(array, func) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = mul(array[i][j], array[i][j]);
        }
    }
    return array;
}
console.log("Массив с функцией: ", functionForArray(matrix, mul));

//===============================// 
