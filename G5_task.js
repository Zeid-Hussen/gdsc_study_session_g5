function printOddNums() {
    let num = 1;

    for (; num <= 10; num++) {
        if (num % 2 != 0) {
            console.log(num);
        } 
    }
}

printOddNums()