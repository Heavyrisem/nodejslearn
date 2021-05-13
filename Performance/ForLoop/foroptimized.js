const Arr = new Array(10000000).fill().map((_, i) => i);
let Time = 0;
let Sum = 0;

for (let j = 0; j < 1000; j++) {
    const Timer = Date.now();
    for (let i = 0, x = Arr.length; i < x; i++)
        Sum += Arr[i];
    Time += Date.now()-Timer;
    Sum = 0;
}
console.log(Time/1000); // 9.761