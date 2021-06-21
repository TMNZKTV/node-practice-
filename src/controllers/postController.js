const {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
} = require("../services/postService");

const getPostsController = async (req, res) => {
  const posts = await getPosts();
  res.json({ posts });
};

const getPostByIDController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);
  res.json({ post, status: "SUCCESS" });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  await addPost({ topic, text });
  res.json({ status: "SUCCESS" });
};

const changePostController = async (req, res) => {
  const { topic, text } = req.body;
  const { id } = req.params;

  await updatePostById(id, { topic, text });
  res.json({ status: "SUCCESS" });
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  await deletePostById(id);
  res.json({ status: "SUCCESS" });
};

module.exports = {
  getPostsController,
  getPostByIDController,
  addPostController,
  changePostController,
  deletePostController,
};
