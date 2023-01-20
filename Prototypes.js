function Product(n){
    this.name = n;
}

let d = new Product("iPhone");
console.log(d);



console.log(Product.prototype)
// Product.prototype.display = function() {console.log("Name - ", this.name);}
this.name = "Arpit";
Product.prototype.display = ()=> {console.log("Name - ", this.name);}
// Product.prototype.display = ()=> {console.log("Name - ", this.name);}
console.log(Product.prototype)
d.display();

console.log(this);