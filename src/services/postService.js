const { Post } = require("../db/postModel");
const { WrongParameterError } = require("../helpers/errors");

const getPosts = async (userId) => {
  const posts = await Post.find({ userId });
  return posts;
};

const getPostById = async (postId, userId) => {
  const post = await Post.findOne({ _id: postId, userId });
  if (!post) {
    throw new WrongParameterError(`no post with id ${postId} found`);
  }
  return post;
};

const addPost = async ({ topic, text }, userId) => {
  const post = new Post({ topic, text, userId });
  await post.save();
};

const updatePostById = async (postId, { text, topic }, userId) => {
  await Post.findOneAndUpdate(
    { _id: postId, userId },
    { $set: { topic, text } }
  );
};

const deletePostById = async (postId, userId) => {
  await Post.findOneAndRemove({ _id: postId, userId });
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
};
