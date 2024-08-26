const[name1, name2, name3, name4] = [
    {name: "Dolphins", score1: 44, score2: 23, score3: 71},
    {name: "Koalas", score1: 65, score2: 54, score3: 49},
    {name: "Dolphins", score1: 85, score2: 54, score3: 41},
    {name: "Koalas", score1: 23, score2: 34, score3: 27},
]

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

var avgDolphins1 = calcAverage(name1.score1, name1.score2, name1.score3)
var avgKoalas1 = calcAverage(name2.score1, name2.score2, name2.score3)

var avgDolphins2 = calcAverage(name3.score1, name3.score2, name3.score3)
var avgKoalas2 = calcAverage(name4.score1, name4.score2, name4.score3)

console.log(avgDolphins1.toFixed(1), avgKoalas1.toFixed(1))

console.log(avgDolphins2.toFixed(1), avgKoalas2.toFixed(1))

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`);
    } else {
        console.log("No team wins");
    }
};

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
