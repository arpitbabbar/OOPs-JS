class Product {
    dis = 10;
    constructor(n,p){
        this.name = n;
        this.price = p;
        this.discount = this.dis;
    }

    display(){
        console.log("Name - " + this.name + " Price - " + this.price + " Discount - " + this.discount);
    }
    setDiscount(){
        this.discount = 20;
    }
    setDis(){
        this.dis = 50;
    }
}

const p1 = new Product("iphone", 100000);
console.log(p1);
p1.display();

p1.setDis();
console.log(p1);

// const p2 = new Product("mac", 13456);
// p2.setDiscount();
// console.log(p2);

// p2.display();

