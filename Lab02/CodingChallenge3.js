const markMiller = {
    fullName: 'Mark Miller',
    mass: 78, 
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const johnSmith = {
    fullName: 'John Smith',
    mass: 92, 
    height: 1.95, 
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};


markMiller.calcBMI();
johnSmith.calcBMI();


if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi.toFixed(1)}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi.toFixed(1)})!`);
} else if (johnSmith.bmi > markMiller.bmi) {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi.toFixed(1)}) is higher than ${markMiller.fullName}'s (${markMiller.bmi.toFixed(1)})!`);
} else {
    console.log(`${markMiller.fullName} and ${johnSmith.fullName} have the same BMI (${markMiller.bmi.toFixed(1)})!`);
}