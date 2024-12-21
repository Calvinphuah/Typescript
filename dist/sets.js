"use strict";
// sets in ts
const names = new Set();
names.add("mario");
names.add("luigi");
names.add("peach");
names.add("mario");
console.log(names);
const user1 = { name: "mario", score: 100 };
const user2 = { name: "luigi", score: 200 };
const usersSet = new Set();
usersSet.add(user1);
usersSet.add(user2);
usersSet.add(user1);
console.log(usersSet);
// Sets as function arguments
function logUserNAmes(users) {
    for (const user of users) {
        console.log(user.name);
    }
}
logUserNAmes(usersSet);
