const square = (width = 1, height = 1) => width * height;

function sign(t = 1) {
    if (t > 0) {
        return 1;
    } else if (t < 0) {
        return -1;
    } else {
        return 0;
    }
}

const rand = (l=1, r=10) => Math.round(Math.random() * (r - l)) + l;

//решил сделать конструкцию do...while, тк на вход могут передать 0, а 0 - это тоже 1 цифра.
//т.е. я хочу, чтобы цикл while как минимум 1 раз прошел, однако не хочу вводить дополнительные переменные. 
function digitCount(num = 1) {
    let d = 0;
    do {
        d++
        num = Math.trunc(num / 10);
    } while (num > 0);
    return d;
}