class Basket {
    constructor(x) {
        this.items = [];
        // size refers to basket capacity
        this.size = x;
    }
    add(item) {
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
        //find the item in the array
        const index = this.items.indexOf(item);
        //remove it
        this.items.splice(index, 1);
        //return the array
        return this.items;
    }


}
module.exports = Basket