const Arr = new Array(10000000).fill().map((_, i) => i);
let Time = 0;
let Sum = 0;

for (let j = 0; j < 10; j++) {
    const Timer = Date.now();
    Arr.forEach(i => {
        Sum += i;
    });
    Time += Date.now()-Timer;
    Sum = 0;
}
console.log(Time/10); // Stopped, 10회 반복: 358.2