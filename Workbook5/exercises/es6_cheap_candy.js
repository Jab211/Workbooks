"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   let productCost = products.filter((product) => product.price <= 4).forEach(product => console.log(product.product + product.price));
 

let candyMM = products.filter((candy) => candy.product.indexOf("M&M") != -1 )

   console.log(candyMM);

//    let candyName = products.filter((product)) => 