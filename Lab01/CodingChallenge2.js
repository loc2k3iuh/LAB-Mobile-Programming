
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
var BMI1
var BMI2
function BMI(mass, height){
    return  mass / (height * height)
}

function CompareBMI(mass1, height1, mass2, height2){
    BMI1 = BMI(mass1, height1)
    BMI2 = BMI(mass2, height2)
    var result = BMI1 > BMI2
    return result
}


var result1 = CompareBMI(markMass1, markHeight1, johnMass1, johnHeight1)
if (result1){
    console.log("Mark có chỉ số BMI cao hơn John")
}else{
    console.log("John có chỉ số BMI cao hơn Mark")
}

if (result1){
    console.log("Mark (" + BMI1.toFixed(1) +")có chỉ số BMI cao hơn John (" + BMI2.toFixed(1)  +")")
}else{
    console.log("John (" + BMI2.toFixed(1)  +")có chỉ số BMI cao hơn Mark (" + BMI1.toFixed(1)  +")")
}