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

const[name1, name2, name3, name4] = [
{name: "Dolphins", score1: 96, score2: 108, score3: 89},
{name: "Koalas", score1: 88, score2: 91, score3: 110},
]

var avgDolphins = calcAverage(name1.score1, name1.score2, name1.score3)
var avgKoalas = calcAverage(name2.score1, name2.score2, name2.score3)
console.log(avgDolphins.toFixed(1), avgKoalas.toFixed(1))
var result = CompareAverage(avgDolphins, avgKoalas)
console.log(result)

