class Basket {
    constructor(x) {
        this.items = [];
        // size refers to basket capacity
        this.size = x;
    }
    add(item) {   
        // if I add duplicate item return error message 
        if(this.items.includes(item) ) { 
            console.log("Item already added")
            return 0
        }
        if(this.items.length < this.size){
            // insert item into items array
            this.items.push(item);
            // return the array
            return this.items;
        } else {
            return 0
        }
    }

    remove(item) {
        // if you remove something that isnt there return 0 and say its not there
        if( this.items.includes(item) ){
            //find the item in the array
            const index = this.items.indexOf(item);
            //remove it
            this.items.splice(index, 1);
            //return the array
            return this.items; 
        } else {
            console.log('Cant remove an item thats not already in the basket')
            return 0
        }



        
    }
    basket(value) {
        total price of items in basket 
        //price of one item
        inventory[this.items.forEach(findPrice())]
        //all items in the basket should be inventoried
        return x result is equal to total in basket
        //sum of items in basket 
    } 


}
module.exports = Basket