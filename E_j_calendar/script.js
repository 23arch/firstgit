function printMonth(amountOfDays) {

    let days = '';
    let pre = '';
    for (let day = 1; day <= amountOfDays; day++) {
        if (day < 10) {
            pre = '0';
        } else {
            pre = '';
        }
        days = days + '|' + pre + day;
        if (day % 7 == 0) {
            console.log(days);
            days = '';
        } else if (day == amountOfDays)
            console.log(days)

    }
}

printMonth(31);
printMonth(28);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);