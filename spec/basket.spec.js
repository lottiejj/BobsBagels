const assertEquals =  require("../src/assertEquals.js");
const Basket = require("../src/basket.js");

let basket, result

//setup 1 item
basket = new Basket ()

//execute 1 item
result = basket.add("Banana Bagel")

//verify 1 item
console.log("Can add one item")
console.log(assertEquals(result.length, 1))
console,log(assertEquals(result.includes("Banana Bagel"), true))
//setup 2 items

//execute 2 items

//verify 2 items

//setup remove item

//execute remove item

//verify remove item