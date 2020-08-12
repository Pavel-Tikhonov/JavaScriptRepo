alert('Вывод в консоли ёлки');

let s = "*";
let sp = "      ";
for (let i = 0; i < 6; i++) {
    console.log(sp.slice(i) + s);
    s += "**";
}
