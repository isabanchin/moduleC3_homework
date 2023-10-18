// Задание 3 (пояснений в учебных материалах нет)
function createObjWithoutProto() {
    return Object.create(null);
}

console.log(createObjWithoutProto())