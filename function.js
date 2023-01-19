function Product(n,p){
    this.name = n; //this points to calling site from where function is called
    this.price = p;

    this.display = () => {
        console.log(this.name, this.price)
    }
    // return this;
    // return {"name" : "Arpit"};
    // return 10;
}

//when we call function with new keyword
// it'll automcatically return the object if we don't return anything
// if we return this -> it'll return thr object with values which we've called
// if return custom JS object, then it'll be returned and npt obj of Product
// if you return primitive in fxn while using new keyword, it'll still return the Product obj

let phone = new Product("Poco M3", 10000);
console.log(phone); // Product { name: 'Poco M3', price: 10000 }
console.log(typeof phone) // object
phone.display();

const p2 = Product("iph", 112333);
console.log(p2); //undefined

//this will act as a normal function without new keyword, so undefined cuz we didn't return anything
//if we return this, then this points to global nodeJS object
/*
What new keyword does?
1. Creates an empty JS obj {}
2. Points obj to function where is is called
3. actual fxn execution (values will be stored now because we know 'new' points aur object to that function)

*/