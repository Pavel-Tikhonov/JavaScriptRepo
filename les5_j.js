// Практикум (доделка)
// 3. Создайте класс Currency, который принимает в конструктур сумму в рублях, а также индекс курсов для доллара и евро.
// - Реализовать геттеры получения информации о количестве денег в долларах и количестве денег в евро.
// - реализовать сеттеры usd, euro, по которым можно назначить новую сумму в рублях

class Currency {
    constructor(sum, dolIdx = 72.93, euroIdx = 86.34) {
        this.sum = sum;
        this.dolIdx = dolIdx;
        this.euroIdx = euroIdx;
    }
    get euroValue() {
        return this.sum / this.euroIdx;
    }
    get dolValue() {
        return this.sum / this.dolIdx;
    }
    set euroValue(value) {
        this.sum = value;
    }
    set dolValue(value) {
        this.sum = value;
    }
}

const money1 = new Currency(100);

/*
1. Создайте класс Course. Конструктор создает ключи name, hours, cost плюс создает пустой объект students. Класс реализует методы:
- print - показывает информацию о курсе через консоль
- addStudent - позволяет добавить нового студента в массив students (студент = объект с ключами id, name)
- deleteStudent - позволяет удалить студента по id
- геттер students - выводит иформацию о студентах курса

Создайте три экземпляра класса Course. Добавьте на каждый курс по 3 студента, попробуйте удалять студентов и использовать геттер students.
*/

class Course {
    constructor(name, hours, cost, students) {
        this.name = name;
        this.hours = hours;
        this.cost = cost;
        this.students = [];
    }
    print() {
        console.log(
            `Название курса: ${this.name}\nКоличество часов: ${this.hours}\nСтоимость: ${this.cost}`
        );
    }
    addStudent(st_name, st_id) {
        //Если пользователь не указывает id явно, делаем автоинкремент, начиная с 1.
        if (typeof st_id == 'undefined') {
            let st_len = this.students.length;
            if (st_len) {
                st_id = this.students[st_len - 1]['id'] + 1;
            } else {
                st_id = 1;
            }
        }
        this.students.push({
            id: st_id,
            name: st_name,
        });
        console.log(
            `В список заочных студентов был добавлен Объект:\n{id: ${st_id}, name: ${st_name}}`
        );
    }
    deleteStudent(st_id) {
        if (this.students.length >= st_id) {
            console.log(
                `Из списка заочных студентов был удален Объект:\n{id: ${st_id}, name: ${
                    this.students[st_id - 1]['name']
                }}`
            );
            this.students.splice(st_id - 1, 1);
        } else {
            console.log(
                `Список заочных студентов пуст или указан неверный индекс.`
            );
        }
    }
    get students_list() {
        console.log('Список заочных студентов курса:');
        if (this.students.length) {
            for (let el of this.students) {
                console.log(`id: ${el['id']}, name: ${el['name']}`);
            }
        } else {
            console.log(`Список пуст.`);
        }
    }
}

course1 = new Course('JavaScript', 14, 25000);
console.log(`Был создан курс: ${course1.name}`);
course1.addStudent('Petrov');
course1.addStudent('Sidorov');
course1.addStudent('Popov');
course1.students_list;
course1.deleteStudent(2);
course1.students_list;

course2 = new Course('Python', 12, 16000);
console.log(`Был создан курс: ${course2.name}`);
course2.addStudent('Morozov');
course2.addStudent('Kozlov');
course2.addStudent('Bodrov');
course2.students_list;
course2.deleteStudent(1);
course2.students_list;

course3 = new Course('PHP', 10, 13000);
console.log(`Был создан курс: ${course3.name}`);
course3.addStudent('Korolev');
course3.addStudent('Gorin');
course3.addStudent('Ivanov');
course3.students_list;
course3.deleteStudent(3);
course3.students_list;

/*
Использовать геттер students не смог. Произошел конфликт с именем свойства - массива students. 
Сначала JS ругался на то, что геттеру students не хватает сеттера. 
При попытке сделать любой сеттер students программа либо не хотела создавать свойство-массив students,
либо зацикливалась на бесконечном вызове set students и выдавала ошибку о превышении количества вызовов функции.
*/

/*
2. Создайте класс OnlineCourse, который наследуется от класса Course. Дополнительным ключом в конструкторе будет hasOffline и пустой массив offlineStudents. Дополнительные методы:
- addOfflineStudent - позволяет добавить очного слушателя,
- deleteOfflineStudent - позволяет удалить очного слушателя,
- геттер showAllStudents - показывает информацию обо всех слушателях (онлайн и очных).

Создайте экземпляр класса OnlineCourse, добавьте в него трех обычных студентов и двух очных. Выведите информацию о студентах через showAllStudents.
*/

class OnlineCourse extends Course {
    constructor(name, hours, cost, students, hasOffline, offlineStudents) {
        super(name, hours, cost, students);
        this.hasOffline = 'Зачем нужен этот ключ?';
        this.offlineStudents = [];
    }

    addOfflineStudent(st_name, st_id) {
        //Если пользователь не указывает id явно, делаем автоинкремент, начиная с 1.
        if (typeof st_id == 'undefined') {
            let st_len = this.offlineStudents.length;
            if (st_len) {
                st_id = this.offlineStudents[st_len - 1]['id'] + 1;
            } else {
                st_id = 1;
            }
        }
        this.offlineStudents.push({
            id: st_id,
            name: st_name,
        });
        console.log(
            `В список очных студентов был добавлен Объект:\n{id: ${st_id}, name: ${st_name}}`
        );
    }

    deleteOfflineStudent(st_id) {
        if (this.offlineStudents.length >= st_id) {
            console.log(
                `Из списка очных студентов был удален Объект:\n{id: ${st_id}, name: ${
                    this.offlineStudents[st_id - 1]['name']
                }}`
            );
            this.offlineStudents.splice(st_id - 1, 1);
        } else {
            console.log(
                `Список очных студентов пуст или указан неверный индекс.`
            );
        }
    }
    get showAllStudents() {
        console.log('Список очных студентов курса:');
        if (this.offlineStudents.length) {
            for (let el of this.offlineStudents) {
                console.log(`id: ${el['id']}, name: ${el['name']}`);
            }
        } else {
            console.log(`Список пуст.`);
        }
        this.students_list;
    }
}

course4 = new OnlineCourse('MySQL', 20, 30000);
console.log(`Был создан курс: ${course4.name}`);

course4.addStudent('Petrov');
course4.addStudent('Sidorov');
course4.addStudent('Popov');

course4.addOfflineStudent('Ivanov');
course4.addOfflineStudent('Kozlov');
course4.addOfflineStudent('Korolev');

course4.showAllStudents;
course4.deleteStudent(2);
course4.deleteOfflineStudent(2);
course4.showAllStudents;
