const { connectMongo } = require("../db/connection");
const ObjectId = require("mongodb").ObjectID;

const getPosts = async (req, res) => {
  const posts = await req.db1.Posts.find({}).toArray();
  res.json({ posts });
};

const getPostByID = async (req, res) => {
  const { id } = req.params;
  const post = await req.db.Posts.findOne({ _id: new ObjectId(id) });

  if (!post) {
    return res
      .status(400)
      .json({ message: `no post with id ${req.params.id} found` });
  }

  res.json({ post, status: "SUCCESS" });
};

const addPost = async (req, res) => {
  const { topic, text } = req.body;

  await req.db.Posts.insert({ topic, text });

  res.json({ status: "SUCCESS" });
};

const putPost = async (req, res) => {
  const { topic, text } = req.body;

  await req.db.Posts.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { topic, text } }
  );
  res.json({ status: "SUCCESS" });
};

const deletePost = async (req, res) => {
  await req.db.Posts.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ status: "SUCCESS" });
};

module.exports = {
  getPosts,
  getPostByID,
  addPost,
  putPost,
  // patchPost,
  deletePost,
};
