"use strict";
function addIdToValue(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
const post = addIdToValue({ title: "Hello", thumbsUp: 10 });
console.log(post.id, post.title, post.thumbsUp);
