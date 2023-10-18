// Задание 1
let obj1 = {
    1: 2,
    2: 4,
    3: 6,
    4: 8
}

const getOwn = function (obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

getOwn(obj1)
