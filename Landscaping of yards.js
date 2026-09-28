function landscapingYards(input) {
    let yards = Number(input[0]);
    let price_before_discount = yards * 7.61;
    let discount = price_before_discount * 0.18;
    let price_after_discount = price_before_discount - discount;

    console.log(`The final price is: ${price_after_discount.toFixed(2)} euro.`);
    console.log(`The discount is: ${discount.toFixed(2)} euro.`);
}

landscapingYards(["550"])