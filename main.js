console.log('Иван за ' + 4 + " часа со скоростью " + 50 + " км/ч проехал " + (50 * 4) + " км");

var user1Name = "Иван";
var user1Speed = 50;
var user1Time = 4;

console.log(user1Name + ' за ' + user1Time + " часа со скоростью " + user1Speed + " км/ч проехал " + user1Time * user1Speed + " км");

var user2Name = "Арсений",
    user2Speed = 120,
    user2Time = 3.5;

console.log(user2Name + ' за ' + user2Time + " часа со скоростью " + user2Speed + " км/ч проехал " + user2Time * user2Speed + " км");

/*
Типы данных: 
 
======  Примитивные типы данных  =====

строки: " Привет Мир!"
        'Hello World!'

числа: 1, 10, 154, -5, 0.5, infinity, -infinity, NaN (not a number)

логические типы: true, false

служебные: null, undefined


======  Сложенные типы данных  ======

массивы = [1, 3, 6, infinity, 'hello', ['red', 'cat']]

объект = {
    name: "Vlad",
    lastName = "Antipenko",
    age: 100,
    cups: ["red", "stolen"],
    mobile: {
        color: "white",
        number: "#"
    },
    isHuman: true,
}


====== Операторы =======

Унарные:
+1
-50

Бинарные:
1+1
5/4
5*4
"строка" + "строка"

Тернарный:

    (условие) ? (в случае true сделать это) : (в случае false делать это)
*/

    let age = 14;

    age < 18 ? console.log("не продаем алкоголь") : console.log("заходи покупай");