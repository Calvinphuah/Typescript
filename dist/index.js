"use strict";
function printPosts(posts) {
  for (let post of posts) {
    console.log(post.title);
    console.log(post.body);
    console.log(post.id);
  }
}
const posts = [
  {
    title: "Hello World",
    body: "This is the body",
    id: 1,
  },
];
printPosts(posts);
