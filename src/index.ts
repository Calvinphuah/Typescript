type Id = number | string;

// interface Post {
//   title: string;
//   body: string;
//   id: number;
// }

// function printPosts(posts: Post[]): void {
//   for (let post of posts) {
//     console.log(post.title);
//     console.log(post.body);
//     console.log(post.id);
//   }
// }

// const posts: Post[] = [
//   {
//     title: "Hello World",
//     body: "This is the body",
//     id: 1,
//   },
// ];

// printPosts(posts);

// const userId: Id = "1231";

// Function Signatures
// type Calculator = (numOne: number, numTwo: number) => number;

// Extending interfaces
// interface HasFormatter {
//   format(): string;
// }

// interface Bill extends HasFormatter {
//   id: string | number;
//   amount: number;
//   server: string;
// }

// const user: Bill = {
//   id: 1,
//   amount: 100,
//   server: "local",
//   format(): string {
//     return `This user has an id of 1`;
//   },
// };

// function printFormatted(val: HasFormatter) {
//   console.log(val.format());
// }

// printFormatted(user);

// Extending type aliases
// type Person = {
//   id: string | number;
//   name: string;
// };

// type User = Person & {
//   email: string;
// };

// const user = {
//   id: 1,
//   name: "John",
// };

type Base = "classic" | "thick" | "thin" | "garlic";

// Classes
abstract class MenuItem {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} -$${this.price}`;
  }

  abstract format(): string;
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: Base): void {
    this.base = base;
  }

  format(): string {
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
