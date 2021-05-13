function Test(input) {
    switch (input) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
        case 7: return 7;
    }
}

const Timer = Date.now();
for (let i = 0; i < 1000000000; i++) {
    Test(i%7+1);
}
console.log(Date.now()-Timer); // 2102