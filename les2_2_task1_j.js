const ans = +prompt("Введите любое целое число: (По умолчанию 10)", "10");
let num = 2;

while (num <= ans) {
    if (!(num & 1)) {
        alert(num);
    }
    num++;
}
alert("Выход из цикла");
