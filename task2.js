let num1 = null,
    num2 = null,
    num3 = null;

num1 = Number( prompt("Введите число", 0) );

if (isNaN(num1)) { 
    num1 = Number( prompt("Введите ЧИСЛО", 0) );
}

num2 = Number( prompt("Введите число", 0) );

if (isNaN(num2)) { 
    num2 = Number( prompt("Введите ЧИСЛО", 0) );
}
num3 = Number( prompt("Введите число", 0) );

if (isNaN(num3)) { 
    num3 = Number( prompt("Введите ЧИСЛО", 0) );
}
//let max = -Infinity;
let max = num1;

//if (num1 > num2 && num1 > num3) {}

/*if ( max < num1 ) {
    max = num1;
}*/

if ( max < num2 ) {
    max = num2;
}

if ( max < num3 ) {
    max = num3;
}

alert('Самое большое число = ' + max);
