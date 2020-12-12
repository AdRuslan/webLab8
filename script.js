//Task 1
let sheepCount = +prompt("Введите количество овец");
let sumStr = "";

for (let i = 1; i < sheepCount + 1; i++) {
  sumStr += `${i} овечка...`;
}

console.log(sumStr);

//Task 2
for (let i = 0; i < 16; i++) {
  console.log(`${i} ${i % 2 == 0 ? "четное" : "нечетное"}`);
}

//Task 3
matr = "";

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      matr += " ";
    } else {
      matr += "#";
    }
  }
  matr += "\n";
}

console.log(matr);

//Task 4
let num1 = 74.7,
  num2 = 100,
  num3 = -40;

//сортировка пузырьком
let bubbleSort = [];
bubbleSort.push(num1, num2, num3);
console.log(bubbleSort);

for (let i = 0; i < bubbleSort.length - 1; i++) {
  for (let j = 0; j < bubbleSort.length - 1; j++) {
    if (bubbleSort[j] > bubbleSort[j + 1]) {
      let tmp;
      tmp = bubbleSort[j];
      bubbleSort[j] = bubbleSort[j + 1];
      bubbleSort[j + 1] = tmp;
    }
  }
}

console.log(bubbleSort);

//сортировка if-ми
if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`${num3}, ${num2}, ${num1}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else {
  if (num2 > num1) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num2}, ${num1}, ${num3}`);
  }
}

//Task 5
let numbers = [];
let maxValue = -Infinity;

for (i = 0; i < 5; i++) {
  numbers.push(+prompt(`Введите число ${i + 1}`));
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(`Максимальное значение: ${maxValue}`);
