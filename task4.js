let num1,
    num2;

num1 = prompt("Введите 1е число");

num2 = prompt("Введите 2е число");


if ((num1 % num2) == 0) {
    alert("Ваши числа делятся");
}else{
    alert("Ваши числа не делятся");
} 
alert("Результат = " + num1 / num2);
