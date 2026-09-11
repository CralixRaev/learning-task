const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    let sum = 0
    for (const i in data) {
        sum += data[i].score;
    }
    return sum / data.length;
}

console.log(calculateAverage(grades));