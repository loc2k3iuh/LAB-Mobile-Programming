// map
var courses = [
    {name: 'Javascript',coin: 250},
    {name: 'HTML, CSS',coin: 0},
    {name: 'Ruby',coin: 200},
    {name: 'PHP',coin: 400},
    {name: 'ReactJS',coin: 500}
];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;    
}

var result = courses.myMap(function (course) {
    return course.name;
});

console.log( "Map: "+  result);

// foreach

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

courses.myForEach(function (course, index, array) {
    console.log(course, index, array);
});

// some

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

var isFree = courses.mySome(function (course, index, array) {
    return course.coin === 0;
});
console.log(isFree);

// every

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

var isFree = courses.myEvery(function (course, index, array) {
    return course.coin === 0;
});
console.log(isFree);

// find

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
}

var course = courses.myFind(function (course, index, array) {
    return course.name === 'Ruby';
});

console.log(course);

// filter

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

var freeCourses = courses.myFilter(function (course, index, array) {
    return course.coin === 0;
});

console.log(freeCourses);

// reduce

Array.prototype.myReduce = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (i; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var totalCoin = courses.myReduce(function (total, course, index, array) {
    return total + course.coin;
}, 0);

console.log(totalCoin);



