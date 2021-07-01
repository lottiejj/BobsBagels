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
    basketValue (inventory) {
        
        let totalPrice = 0
        this.items.forEach(x => totalPrice += inventory[x])
        return totalPrice
    } 
}

module.exports = Basket