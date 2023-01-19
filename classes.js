class Product {
    constructor(n,p){
        this.name = n;
        this.price = p;
    }

    display(){
        console.log("Name - " + this.name + " Price - " + this.price);
    }
}

const p1 = new Product("iphone", 100000);
console.log(p1);
p1.display();