let Arr = [];
let Time = 0;
for (let j = 0; j < 1000; j++) {
    const Timer = Date.now();
    for (let i = 0; i < 1000000; i++)
        Arr.push(i);
    Time += Date.now()-Timer;
    Arr = [];
}
console.log(Time/1000); // 21.132 Whale: 15.563