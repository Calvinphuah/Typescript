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
    format() {
        let formatted = this.details + "\n";
        // base
        formatted += `Pizza on a ${this.base} base`;
        // toppings
        if (this.toppings.length < 1) {
            formatted += `with no toppings`;
        }
        if (this.toppings.length > 0) {
            formatted += ` with ${this.toppings.join(", ")}`;
        }
        return formatted;
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
// function printMenuItem(item: MenuItem): void {
//   console.log(item.details);
// }
// printMenuItem(pizza);
