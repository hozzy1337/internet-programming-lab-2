function isInteger(num) {
    return (num ^ 0) === num;
}
var number = +prompt("Введите число: ");
alert( isInteger(number) );

function isFind(a, b) {
    nextPrime:
        for (var i = a; i <= b; i++) {

            for (var j = a; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }

            console.log( i ); // простое
        }
}
console.log(isFind(5, 10));
isInteger(num);
