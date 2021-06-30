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
console.log(assertEquals(result.includes("Banana Bagel"), true))


//setup 2 items
basket = new Basket ()

//execute 2 items
result1 = basket.add("Banana Bagel")
result2 = basket.add("Blueberry Bagel")

//verify 2 items
console.log("Can add two items")
console.log(assertEquals(result2.length, 2))
console.log(assertEquals(result1.includes("Banana Bagel"), true))
console.log(assertEquals(result2.includes("Blueberry Bagel"), true))

//setup remove item
basket = new Basket ()
basket.add("Banana Bagel")

//execute remove item
result = basket.remove("Banana Bagel")

//verify remove item
console.log("remove item")
console.log(assertEquals(result.length, 0))
console.log(assertEquals(result.includes("Banana Bagel"), false))