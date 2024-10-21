//array of objects
let posts = [
  { id: 49, title: "Pithani" },
  { id: 33, title: "Rohit" },
  { id: 34, title: "Praveen" },
  { id: 27, title: "Hello" },
];
//desc get all posts
//route GET /api/posts
const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
//desc get single post
//route GET /api/posts/:id
const getPost = (req, res, next) => {
const id = parseInt(req.params.id);
const post = posts.find((post) => post.id === id);
if (!post) {
    const error = new Error(`post with id ${id} was not found`);
    error.status = 404;
    next(error);
  }
  res.status(200).json(post);
};
//desc create new post
//route POST /api/posts

const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    const error = new Error(`no title included`);
    error.status = 404;
    next(error);
  }
  posts.push(newPost);
  res.status(201).json({ msg: "added" });
  console.log(posts);
};

//desc:update post
//route POST /api/posts/:id

const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`cant update,post with id ${id} was not found`);
    error.status = 404;
    next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
  console.log(posts);
};

//desc:delete post
//route DELETE /api/posts/:id

const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    console.log("bhai");
    const error = new Error(`cant delete,post with ${id} was not found`);
    error.status = 404;
    next(error);
  } else {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
    console.log(posts);
  }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
