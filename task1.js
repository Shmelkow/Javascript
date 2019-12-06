alert ("Авторизируйся, пожалуйста");

let userLogin,
    userPassword,
    sitePassword = "12345";

userLogin = prompt("Введи имя");

userPassword = prompt("Введите пароль");

if (userPassword == sitePassword) {
    alert("Удачно!");
} else {
    alert("Ваш пароль не верный");
}