var num1 = prompt('Введите первое число: ');
var num2 = prompt('Введите второе число: ');
var num3 = prompt('Введите третье число: ');

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    alert('Среднее число ' + num1);
} else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
    alert('Среднее число ' + num2);
} else if (num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1) {
    alert('Среднее число ' + num3);
} else {
    alert('Два из трех чисел равны!');
}