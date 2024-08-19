
// Data 1
var markMass1 = 78 // kg
var markHeight1 = 1.69 // meters
var johnMass1 = 92 // kg
var johnHeight1 = 1.95 // meters

// Data 2
var markMass2 = 95 // kg
var markHeight2 = 1.88 // meters
var johnMass2 = 85 // kg
var johnHeight2 = 1.76 // meters

function BMI(mass, height){
    return  mass / (height * height)
}

function CompareBMI(mass1, height1, mass2, height2){
    var BMI1 = BMI(mass1, height1)
    var BMI2 = BMI(mass2, height2)
    var result = BMI1 > BMI2
    return result
}


var result1 = CompareBMI(markMass1, markHeight1, johnMass1, johnHeight1)
console.log("Kết quả là: "+ result1)
var result2 = CompareBMI(markMass2, markHeight2, johnMass2, johnHeight2)
console.log("Kết quả là: "+ result2)
