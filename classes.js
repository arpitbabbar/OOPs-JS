class Product {
    constructor(n,p){
        this.name = n;
        this.price = p;
    }

    display(){
        console.log("Name - " + this.name + " Price - " + this.price + " Discount - " + this.discount);
    }
    setDiscount(){
        this.discount = 10;
    }
}

const p1 = new Product("iphone", 100000);
console.log(p1);
p1.display();
p1.setDiscount();

const p2 = new Product("mac", 13456);
p2.setDiscount();
console.log(p2);

p2.display();

