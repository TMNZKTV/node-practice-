const { Post } = require("../db/postModal");
const { WrongParametrError } = require("../helpers/errors");

const getPosts = () => {
  const posts = await Post.find({});
  return posts;
};

const getPostById = (id) => {
  const post = await Post.findById(id);
  if (!post) {
    throw new WrongParametrError(`no post with id ${id} found`);
  }
  return post;
};

const addPost = ({ topic, text }) => {
  const post = new Post({ topic, text });
  await post.save();
};

const updatePostById = (id, { text, topic }) => {
  await Post.findByIdAndUpdate(id, { $set: { topic, text } });
};

const deletePostById = (id) => {
  await Post.findByIdAndRemove(id);
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
};
