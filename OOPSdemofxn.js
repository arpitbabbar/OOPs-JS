let obj = {
    x: 10,
    y: 20
}

Object.freeze(obj);
console.log(Object.freeze());
obj.x = 20;
console.log(obj);