function Test(input) {
    if (input == 1) return 1;
    else if (input == 2) return 2;
    else if (input == 3) return 3;
    else if (input == 4) return 4;
    else if (input == 5) return 5;
    else if (input == 6) return 6;
    if (input == 7) return 7;
}

const Timer = Date.now();
for (let i = 0; i < 1000000000; i++) {
    Test(i%7+1);
}
console.log(Date.now()-Timer); // 2117