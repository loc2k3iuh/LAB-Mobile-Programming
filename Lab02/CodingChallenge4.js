// Assuming calcTip function already exists
// Example calcTip function (no need to redefine if already defined)
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Step 1: Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Step 2: Create empty arrays for the tips and totals
const tips = [];
const totals = [];

// Step 3: Use a for loop to calculate tips and total values
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Bonus: Step 4 - Write a function 'calcAverage' to calculate the average of an array
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Calculate the average of the totals array
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);