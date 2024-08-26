const bill_values = [125, 555, 44]

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const tips = bill_values.map(bill => calcTip(bill));
const total = bill_values.map((bill, index) => bill + tips[index]);
const bill = 100;
const tip = calcTip(bill);
console.log(`The tip for a bill of $${bill} is $${tip}`);
console.log(`The total for the bills are: ${total}`);
