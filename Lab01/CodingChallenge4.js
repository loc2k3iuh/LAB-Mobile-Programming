function tip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
function total(bill){
    return bill + tip(bill)
}

const bill_values = [275, 40, 430]


console.log(`Hóa đơn là: ${bill_values[0]}, tiền tiếp là: ${tip(bill_values[0])}, và tổng giá trị là: ${total(bill_values[0])}`)
