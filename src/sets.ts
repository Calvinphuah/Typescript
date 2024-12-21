// sets in ts

const names = new Set<string>();

names.add("mario");
names.add("luigi");
names.add("peach");
names.add("mario");

console.log(names);

// Sets with custom types
interface User {
  name: string;
  score: number;
}

const user1: User = { name: "mario", score: 100 };
const user2: User = { name: "luigi", score: 200 };

const usersSet = new Set<User>();

usersSet.add(user1);
usersSet.add(user2);
usersSet.add(user1);

console.log(usersSet);

// Sets as function arguments
function logUserNAmes(users: Set<User>): void {
  for (const user of users) {
    console.log(user.name);
  }
}

logUserNAmes(usersSet);
