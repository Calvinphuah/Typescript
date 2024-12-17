interface HasID {
  id: number;
}

function addIdToValue<T>(value: T): T & HasID {
  const id = Math.random();

  return { ...value, id };
}

interface Post {
  title: string;
  thumbsUp: number;
}

const post = addIdToValue<Post>({ title: "Hello", thumbsUp: 10 });

console.log(post.id, post.title, post.thumbsUp);
