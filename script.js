//Task 1
let sheepCount = +prompt("Введите количество овец");
let sumStr = "";

for (let i = 1; i < sheepCount + 1; i++) {
  sumStr += `${i} овечка...`;
}

console.log(sumStr);


//Task 2
for (let i = 0; i < 16; i++) {
    console.log(`${i} ${i % 2 == 0 ? 'четное' : 'нечетное'}`)
}
