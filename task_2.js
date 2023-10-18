// Задание 2
let obj1 = {
    1: 3,
    2: 5,
}

let obj2 = {
    4: 2,
    2: 4,
}
const str1 = "1"

function cheсkKey(str, obj) {
    return (str in obj)
}

console.log(cheсkKey(str1, obj1));
console.log(cheсkKey(str1, obj2));