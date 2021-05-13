let Arr = new Array(1000000);
let Time = 0;
for (let j = 0; j < 1000; j++) {
    const Timer = Date.now();
    for (let i = 0; i < 1000000; i++)
        Arr[i] = i;
    Time += Date.now()-Timer;
    Arr = new Array(1000000);
}
console.log(Time/1000); // 1.05