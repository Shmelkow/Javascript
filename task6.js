var num1,
    num2,
    max,
    min,
    answer;

max = 9;
min = 1;

num1 = Math.floor(Math.random() * (max - min + 1)) + min;

num2 = Math.floor(Math.random() * (max - min + 1)) + min;

answer = prompt("Сколько будет " + num1 + "x" + num2 + "?");

if (answer == num1 * num2) {
    alert("Вы ответили верно");
}else{
    alert("Не верно! Правильный ответ: " + num1 * num2);
}