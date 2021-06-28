const {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
} = require("../services/postService");

const getPostsController = async (req, res) => {
  const { _id: userId } = req.user;

  const posts = await getPosts(userId);
  res.json({ posts });
};

const getPostByIDController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;

  const post = await getPostById(postId, userId);
  res.json({ post, status: "SUCCESS" });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  const { _id: userId } = req.user;

  await addPost({ topic, text }, userId);
  res.json({ status: "SUCCESS" });
};

const changePostController = async (req, res) => {
  const { topic, text } = req.body;
  const { id: postId } = req.params;
  const { _id: userId } = req.user;

  await updatePostById(postId, { topic, text }, userId);
  res.json({ status: "SUCCESS" });
};

const deletePostController = async (req, res) => {
  const { id: postId } = req.params;
  const { _id: userId } = req.user;

  await deletePostById(postId, userId);
  res.json({ status: "SUCCESS" });
};

module.exports = {
  getPostsController,
  getPostByIDController,
  addPostController,
  changePostController,
  deletePostController,
};
