//Task 1
let sheepCount = +prompt("Введите количество овец");
let sumStr = "";

for (let i = 1; i < sheepCount + 1; i++) {
  sumStr += `${i} овечка...`;
}

console.log(sumStr)
