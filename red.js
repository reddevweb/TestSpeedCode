let start = new Date();

for (let i =0; i < 1000; i++) {
    let some = i** 9;
    console.log(some)
}

let end = new Date();

console.log(`Цикл отработал за ${end - start}  миллисекунд `);