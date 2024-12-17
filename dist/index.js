"use strict";
// Classes
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} -$${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(base) {
        this.base = base;
    }
}
const pizza = new Pizza("mario special", 15);
// console.log("pizza", pizza);
// function addMushroomToPizza(pizzas: Pizza[]): void {
//   for (const pizza of pizzas) {
//     pizza.addTopping("mushrooms");
//   }
// }
// addMushroomToPizza([pizza]);
// console.log("pizza", pizza);
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizza);
