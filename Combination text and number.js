function combinateTextAndNumber(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}! You are ${age} year old in ${town}`);
}

combinateTextAndNumber(["Strahil", "Dimitrov", "27", "Montana!"])