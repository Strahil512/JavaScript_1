function zooShop(input) {
    let number_dog_food = Number(input[0]);
    let number_cat_food = Number(input[1]);
    let price_dog_food = 0;
    let price_cat_food = 0;
    let price = 0;

    price_dog_food = number_dog_food * 2.50;
    price_cat_food = number_cat_food * 4;
    price = price_dog_food + price_cat_food;

    console.log(`${price} euro.`);
}

zooShop(["5", "4"])
zooShop(["13", "9"])