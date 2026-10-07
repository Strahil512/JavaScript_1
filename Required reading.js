function reading(input) {
    let current_book_page = Number(input[0]);
    let read_page_one_hour = Number(input[1]);
    let days_read_book = Number(input[2]);

    let need_time = current_book_page / read_page_one_hour;
    let need_days = need_time / days_read_book;

    console.log(need_days);
}

reading(["212", "20", "2"])
reading(["432", "15", "4"])