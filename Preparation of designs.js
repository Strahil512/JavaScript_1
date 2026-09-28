function preparationDesigns(input) {
    let name = input[0];
    let number_project = Number(input[1]);
    let need_time = number_project * 3;

    console.log(`The architect ${name} will need ${need_time} hours to complete ${number_project} project/s.`);
}

preparationDesigns(["George", "4"])
preparationDesigns(["Sanya", "9"])