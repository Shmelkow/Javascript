var a,
    b,
    c,
    x1,
    D;

a = prompt("Введите число a");

b = prompt("Введите число b");

c = prompt("Введите число c");

D = Math.pow(b, 2) - 4 * a * c;
alert("Дискриминат = " + D);

if ( D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert("Решение: x1 = " + x1.toFixed(3) + " x2 = " + x2.toFixed(3));

}else{
    alert("Корней нет - дискриминант отрицательный");
}

if (D == 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    alert("Решение: x1 = x2 =" + x2.toFixed(3));
}
