const assertEquals =  require("../src/assertEquals.js");
const Basket = require("../src/basket.js");
const inventory = require("./../src/inventory.js")

let basket, result, expectedResult

// ------------------ test 1
//setup 1 item
basket = new Basket (3)

//execute 1 item
result = basket.add("Banana Bagel")

//verify 1 item
console.log("Can add one item")
console.log(assertEquals(result.length, 1))
console.log(assertEquals(result.includes("Banana Bagel"), true))

// ------------------ test 2

//setup 2 items
basket = new Basket (3)

//execute 2 items
result1 = basket.add("Banana Bagel")
result2 = basket.add("Blueberry Bagel")

//verify 2 items
console.log("Can add two items")
console.log(assertEquals(result2.length, 2))
console.log(assertEquals(result1.includes("Banana Bagel"), true))
console.log(assertEquals(result2.includes("Blueberry Bagel"), true))


// ------------------ test 3

//setup remove item
basket = new Basket (3)
basket.add("Banana Bagel")

//execute remove item
result = basket.remove("Banana Bagel")

//verify remove item
console.log("remove item")
console.log(assertEquals(result.length, 0))
console.log(assertEquals(result.includes("Banana Bagel"), false))


// ------------------ test 4
console.log("Check if its full and then not allow more items")

//setup remove item
basket = new Basket (3)
basket.add("Banana Bagel")
basket.add("Blueberry Bagel")
expectedResult = 0


//execute remove item

// 1) dont add it to the basket
// 2) return somethign we can check with
result = basket.add("Apple Bagel")

//verify remove item

console.log(assertEquals(result, expectedResult))
console.log(assertEquals(basket.items.includes("Apple Bagel"), false))




// ------------------ test 5
console.log("Test to see if we can increase size of basket")

//setup remove item
basket = new Basket (10)
expectedResult = 10


//execute 
result = basket.size
console.log(result)


//verify remove item

console.log(assertEquals(result, expectedResult))



// ------------------ test 6
console.log("Test if i can remove an item thats not there")

//setup remove item
basket = new Basket (10)
expectedResult = 0

//execute 
result = basket.remove('something')

//verify remove item
console.log(assertEquals(result, expectedResult))


// ------------------ test 7
console.log("Test if i can add duplicate items")

//setup add duplicate
basket = new Basket (10)
basket.add("Banana Bagel")

expectedResult = 0

//execute 
result = basket.add("Banana Bagel")
 
//verify remove item
console.log(assertEquals(result, expectedResult))


// ------------------ test 8
console.log("Test if i can see the price of each item before I add it to my basket.")

//setup add duplicate

expectedResult = 2.5

//execute 
console.log('inventory: ')
console.log(inventory)
result = inventory['Banana Bagel']
console.log(result)
//verify remove item
console.log(assertEquals(result, expectedResult))





// ------------------ test 9
console.log("Test if i can see the total price of my basket.")

//setup add duplicate
basket = new Basket(10)
basket.add("Plain Bagel")
basket.add("Blueberry Bagel")

 //total price of items in basket returns x result is equal to total in basket 
expectedResult = 3
result = basket.basketValue(inventory)

//execute 

//verify remove item
console.log(assertEquals(result, expectedResult))