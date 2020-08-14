//0. Создайте объект с информацией о стоимости покупки (ключ - название продукта, значение - его цена). 
//Создайте функцию, которая подсчитывает и выводит информацию о количестве товаров и общей сумме всех покупок.
const goods = {
    laptop: 150,
    pc: 170,
    iphone: 180,
    ipad: 190,
    xiaomi: 200,
    Count() {
        let sum = 0;
        let num = 0;
        for (let prop in this) {
            if (prop != "Count") {
                num++;
                sum += this[prop];
            };
        }
        return goodsInfo = {
            count: num,
            total: sum
        }
    }
};

//1. Создайте объект user с именем, возрастом, и профессией. 
//Создайте новый объект user2, скопировав объект user. Измените имя и возраст у user2. 
//Проверьте, что у user данные остались прежними (прим. копирование должно быть не по ссылке).
const user = {
    name: "Peter",
    age: 18,
    prof: "pianist"
};
console.log(`1)user`, user)

const user2 = Object.assign({}, user);
console.log(`2)user2 (копия user)`, user2)

user2["name"] = 'John';
user2["age"] = 25;
console.log(`3)user2 после изменений`, user2);
console.log(`3)user после изменений user2`, user);

/*
2. Создайте массив users с тремя элементами, 
где каждый элемент представляет собой объект пользователя с именем, возрастом и профессией. 
Через цикл выведите в консоль информацию обо всех пользователях в формате console.log("Имя, возвраст, профессия").
*/
const user3 = Object.assign({}, user);
user3["name"] = "Kate";
user3["age"] = 30;
user3["prof"] = 'blacksmith';
user2["prof"] = "gardener";

const us_arr = [user, user2, user3];
for (let el of us_arr) {
    console.log(el.name, el.age, el.prof);
};

/*
3. Создайте массив из 10 случайных чисел, выведите числа в консоль. 
Затем обойдите все элементы массива, возведя каждый элемент в квадрат и снова выведите все элементы в консоль. 
Отсортируйте массив и снова выведите его в консоль.
*/
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random()*10));
};
console.log(arr);

arr = arr.map(num => num**2);
console.log(arr);

arr = arr.sort((a, b) => a - b);
console.log(arr);

/*
4. Дан массив курсов:
const courses = ['Html level1', 'JavaScript level1', 'JavaScript level2', Python level1'].
Отфильтруйте массив курсов, выбрав только курсы по JavaSctipt (прим. используйте методы filter и includes).
*/
const courses = ['Html level1', 'JavaScript level1', 'JavaScript level2', 'Python level1'];

let JScourses = [];
for (let el of courses) {
    if(el.split(" ").includes("JavaScript")) {
        JScourses.push(el);
    }
};
console.log(courses, "\n", JScourses);

/*
5. Дан массив с корзиной товара
const basket = [
   {name: 'Сырок', price: 45, quantity: 6},
   {name: 'Семечки', price: 39, quantity: 2},
   {name: 'Мыло', price: 60, quantity: 1},
]
Подсчитайте общую стоимость всех товаров в корзине, с учетом количества каждого товара (прим. используйте метод reduce).
*/
const basket = [
    {name: 'Сырок', price: 45, quantity: 6},
    {name: 'Семечки', price: 39, quantity: 2},
    {name: 'Мыло', price: 60, quantity: 1},
 ];
for (let el of basket) {
    console.log(el.name, `Цена: ${el.price}`, `Количество: ${el.quantity}`);
};

 const basket_total = basket.reduce((acc, obj) => {return acc + obj.price * obj.quantity}, 0);
 console.log(`Суммарная стоимость корзины: ${basket_total}`);
