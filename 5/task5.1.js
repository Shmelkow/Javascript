/*let hello = function() {
    console.log("Привет, JavaScript");
}

hello();*/

/*let hello = function() {
    return "Привет, JavaScript";
}

console.log(hello());*/

let rgb = function(x1, x2, x3) {
    x1 = x1 || 0;
    x2 = x2 || 0;
    x3 = x3 || 0;
    return "rgba(" + x1 + "," + x2 + "," + x3 + ")"
}

let x1 = +prompt("Введите число до 255: ", 0);
let x2 = +prompt("Введите число до 255: ", 0);
let x3 = +prompt("Введите число до 255: ", 0);

console.log(rgb(x1, x2, x3));