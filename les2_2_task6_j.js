const ans = prompt('Введите любую строку.\nОна вернется в консоли буквенно на разных строчках, исключая пробелы.');

for (i = 0; i < ans.length; i++) {
    if (ans[i] != " ") {
        console.log(ans[i]);
    }
}