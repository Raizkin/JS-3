// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

result = 5 + 5 + '5';
console.log(result);
console.log(typeof(result));


// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.


// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

// let first = "My";
// let second = "name";
// let third = "is";
// let fullName += = "Viktor";
// let fullName = first + " " + second + " " + third;


// console.log(fullName);


let first = "My";
let second = "name";
let third = "is";
let fullname = first + " " + second + " " + third;
fullname += " Viktor";
console.log(fullname);


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»


const userName = "Олександра";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);