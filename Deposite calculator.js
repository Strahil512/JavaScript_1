function calculator(input) {
    let deposite_sum = Number(input[0]);
    let deposite_month = Number(input[1]);
    let year_interest_rate = Number(input[2]);

    let sum = deposite_sum + deposite_month * ((deposite_sum * year_interest_rate / 100) / 12);

    console.log(sum);
}

calculator(["200", "3", "5.7"])
calculator(["2350", "6", "7"])