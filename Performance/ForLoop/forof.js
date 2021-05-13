const Arr = new Array(10000000).fill().map((_, i) => i);
let Time = 0;
let Sum = 0;

for (let j = 0; j < 1000; j++) {
    const Timer = Date.now();
    for (let i of Arr)
        Sum += i;
    Time += Date.now()-Timer;
    Sum = 0;
}
console.log(Time/1000); // 15.662