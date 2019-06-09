'use strict';

console.log('Первая задача');
function Product(name, price) {

    this.name = name;
    this.price = price;
}

let food2 = new Product('burger',300),
    food1 = new Product('twister',300);
console.log(food1);
console.log(food2);

function Bascket() {
    let products = [];
    let howProducts = 0;
    let pricesProducts = [];
    let sumProducts = 0;

    this.addProducts = function (product) {
        products.push(product);
        return products;
    };

    this.howProducts = function () {
        howProducts = products.length;
        return howProducts;
    };

    this.priceProducts = function () {
        for (let i = 0; i <= products.length - 1; i++) {
            pricesProducts.push(products[i].price);
            sumProducts += pricesProducts[i]
        }
        return sumProducts;
    };
}

let basket = new Bascket();
basket.addProducts(food1);
basket.addProducts(food2);

console.log(`Количество товаров в корзине - ${basket.howProducts(basket)}`);
console.log(`Общая стоимость товаров в корзине - ${basket.priceProducts(basket)}`);

//----------------------------------------------------------------------------------------------------------------------
console.log('Вторая задача');
function Human(name,age,sex,hobby) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
    this.toString = function () {
        return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.hobby}.`;
    }
}

let human = new Human('Иван', 18, 'мужской', 'музыка, спорт');
console.log(human.toString());

// один из вариантов, подскажите чем он плох(кроме того что в объекте хранится в итоге только место обучения)
// function Student(name,age,sex,hobby, study) {
//     let student = new Human(name,age,sex,hobby);
//     this.study = study;
//     this.toString = function () {
//         return `Человек: ${student.name}. Возраст: ${student.age} лет. Пол: ${student.sex}. Интересы: ${student.hobby}. Обучается в ${this.study}.`;
//     }
// }
// вариант к дз
function Student(name,age,sex,hobby,study) {
    Human.apply(this, arguments);
    this.study = study;
    this.toString = function () {
        return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.hobby}. Обучается в ${this.study}.`;
    }
}

let student = new Student('Иван', 18, 'мужской', 'музыка, спорт', 'ИТМО');
console.log(student.toString());


//----------------------------------------------------------------------------------------------------------------------
console.log('Третья задача');

function User(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return `Имя пользователя - ${this.name}`;
    };
}

let user = new User('Васян',18);
console.log(user.toString());

User.anonim = function () {
    let anonim = new User();
    anonim.name = 'Аноним';
    return anonim;
};
let anon = User.anonim();
console.log(anon.toString());

let obj = {
    name: 'Uga',
    age: 18
};
User.userObject = function (obj) {
    let a = {};
    a.name = obj.name;
    a.age = obj.age;
    return a;
};
console.log(User.userObject(obj));
// с объектом на входе не понял что нужно

//----------------------------------------------------------------------------------------------------------------------

// Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().
//
// Объект WeakSet - коллекция, элементами которой могут быть только объекты. Ссылки на эти объекты в WeakSet являются слабыми.
// Каждый объект может быть добавлен в WeakSet только один раз.
//
//
// Объект ArrayBuffer используется для работы с бинарными данными. Он представляет собой ссылку на поток "сырых" двоичных данных,
// однако работать с ними напрямую возможности не дает. Вместо этого, вы можете создать типизированный массив или объект DataView,
// который можно использовать для чтения и записи данных в ArrayBuffer.
//
// Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов.
// Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.
//
// Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON.
// Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.
//
// Объект Promise (обещание) используется для отложенных и асинхронных вычислений.
//
// Объект Atomics предоставляет атомарные операции как статические методы. Используется вместе с объектом SharedArrayBuffer.
//
// Объект WeakMap — коллекция пар ключ-значение. В качестве ключей могут быть использованы только объекты, а значения могут быть произвольных типов.
//
// Объект WeakSet - коллекция, элементами которой могут быть только объекты. Ссылки на эти объекты в WeakSet являются слабыми.
// Каждый объект может быть добавлен в WeakSet только один раз.
//
// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.




