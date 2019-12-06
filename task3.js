let x,
    y;

x = prompt("Введите число x");

if (x > 0) {
    y = 2 * x - 10;
}else{
    y = 2 * Math.abs(x) - 1;
} 

if (x == 0) {
    y = 0;
} 

alert("Ваш ответ: y = " + y);