class Basket {
    constructor() {
        this.items = [];
    }
    add(item) {
        // insert item into items array
        this.items.push(item);
        // return the array
        return this.items;
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