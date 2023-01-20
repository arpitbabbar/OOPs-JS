// only this syntax will work
function abc(n) {
this.name  =n;
}

let a = new abc("iphone");
console.log(a);

// NOPE. cuz Arrow Function ka khud ka koi scope nhi hota
// (n) => {
//     this.name  =n;
//     }
    
//     let a = new ("iphone"); //TypeError: "iphone" is not a constructor
//     console.log(a);

// function(n) { //SyntaxError: Function statements require a function name
//     this.name  =n;
//     }
    
//     let a = new ("iphone"); //TypeError: "iphone" is not a constructor
//     console.log(a);
