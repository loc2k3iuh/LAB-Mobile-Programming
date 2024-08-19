function calcAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}

function CompareAverage(avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas){
        console.log("Dolphins win !")
    } else if (avgKoalas < avgDolphins){
        console.log("Koalas win !")
    } else {
        console.log("Draw !")
    }
}

function CompareAverageBonus1(avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas || avgDolphins >= 100){
        console.log("Dolphins win !")
    } else if (avgKoalas < avgDolphins || avgKoalas >= 100){
        console.log("Koalas win !")
    } else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100){
        console.log("Draw !")
    }else{
        console.log("UNKNOW !")
    }
}

const[name1, name2, name3, name4, name5, name6] = [
{name: "Dolphins", score1: 96, score2: 108, score3: 89},
{name: "Koalas", score1: 88, score2: 91, score3: 110},
{name: "Dolphins", score1: 97, score2: 112, score3: 101},
{name: "Koalas", score1: 109, score2: 95, score3: 123},
{name: "Dolphins", score1: 97, score2: 112, score3: 101},
{name: "Koalas", score1: 109, score2: 95, score3: 106},
]

var avgDolphins = calcAverage(name1.score1, name1.score2, name1.score3)
var avgKoalas = calcAverage(name2.score1, name2.score2, name2.score3)
console.log(avgDolphins.toFixed(1), avgKoalas.toFixed(1))
var result = CompareAverage(avgDolphins, avgKoalas)
console.log(result)

var avgDolphins1 = calcAverage(name3.score1, name3.score2, name3.score3)
var avgKoalas1 = calcAverage(name4.score1, name4.score2, name4.score3)
console.log(avgDolphins1.toFixed(1), avgKoalas1.toFixed(1))
var result1 = CompareAverageBonus1(avgDolphins1, avgKoalas1)
console.log(result1)

