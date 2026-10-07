function schoolMaterials(input) {
    let pens_packets = 5.80;
    let markers_packets = 7.20;
    let preparation_liter = 1.20;

    let quantity_pens = Number(input[0]);
    let quantity_markers = Number(input[1]);
    let liters_preparation = Number(input[2]);
    let discount_percent = Number(input[3]);

    let pens_price = quantity_pens * pens_packets;
    let markers_price = quantity_markers * markers_packets;
    let preparation_price = liters_preparation * preparation_liter;
    let all_sum = pens_price + markers_price + preparation_price;
    let price_after_discount = all_sum - (all_sum * discount_percent / 100);

    console.log(price_after_discount);
}

schoolMaterials(["2", "3", "4", "25"])
schoolMaterials(["4", "2", "5", "13"])