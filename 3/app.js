
let arrLength = Number(prompt("Input array length"), 5),
    sum = 0,
    min = 0,
    max = 9;

let arr = [];
 //let arrNew = [];


/*for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    //sum += arr[i];
    if( (arr[i] % 2 == 0) && arr[i] > 0 ) {
        arrNew.push(arr[i]);
    }
}

console.log(arr);
/*alert("Среднее число = " + sum / arrLength);
console.log(sum / arrLength);*/

/*console.log(arrNew);*/

for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(arr);

for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
        if ( arr[i] % arr[j] == 0 && (i != j) ) {

            console.log( arr[i] + "/" + arr[j] + ": число делится без остатка");

        }else if ( arr[i] < arr[j] && (i != j) ) {

            console.log( arr[i] + "/" + arr[j] + ": первое число меньше второго");

        }else if (arr[i] % arr[j] != 0 && (i != j)){

            console.log( arr[i] + "/" + arr[j] + ": число НЕ делится без остатка!");

        }
    }
}