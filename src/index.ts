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
// class Pizza {
//   title: string;
//   price: number;
//   base;
// }
