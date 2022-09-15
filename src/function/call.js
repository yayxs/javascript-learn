function Product(name,price){

  this.name = name
  this.price = price
}

function Food(name,price){
  Product.call(this,name,price)
}


console.log('func run ------');