let getZp = function() {
    console.log(this);
    console.log(this.days * this.zpPerDay);
}

let zp = [
    {
        name: "Ivan",
        zpPerDay: 100,
        days: 5,
        getZp: function(){
            console.log(this.days * this.zpPerDay);
        }
        //getZp: getZp()
    },
    {
        name: "Maxim",
        zpPerDay: 300,
        days: 2,
        getZp: function(){
            console.log(this.days * this.zpPerDay);
        }
    },
    {
        name: "Alex",
        zpPerDay: 200,
        days: 10,
        getZp: function(){
            console.log(zp[2].days * zp[2].zpPerDay);
        }
    }
]

/*let maxValue = 0,
    maxValueIndex = 0;

for (let i = 0; i < 3; i++) {
    if ( (zp[i].days * zp[i].zpPerDay) > maxValue ) {
        maxValue = (zp[i].days * zp[i].zpPerDay);
        maxValueIndex = i;
    }
    //console.log("Zp " + zp[i].name + " = " + zp[i].days * zp[i].zpPerDay);
}

console.log("Max zp: " + zp[maxValueIndex].name);

let count = 0;

for (key in zp[0]) {
    console.log(key);
    count++;
}
console.log("Number of properties" + count);*/