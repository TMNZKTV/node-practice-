/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
let posts = [
  { id: "1", topic: "test1", text: "text1" },
  { id: "2", topic: "test2", text: "text2" },
  { id: "3", topic: "test3", text: "text3" },
  { id: "4", topic: "test4", text: "text4" },
  { id: "5", topic: "test5", text: "text5" },
];

const getPosts = (req, res) => {
  res.json({ posts, status: "SUCCESS" });
};

const getPostByID = (req, res) => {
  const [post] = posts.filter((item) => item.id === req.params.id);

  if (!post) {
    return res
      .status(400)
      .json({ message: `no post with id ${req.params.id} found` });
  }

  res.json({ post, status: "SUCCESS" });
};

const addPost = (req, res) => {
  const { topic, text } = req.body;

  posts.push({
    id: new Date().getTime().toString(),
    topic,
    text,
  });

  res.json({ status: "SUCCESS" });
};

const putPost = (req, res) => {
  const { topic, text } = req.body;

  posts.forEach((post) => {
    if (post.id === req.params.id) {
      (post.topic = topic), (post.text = text);
    }
  });
  res.json({ status: "SUCCESS" });
};

const patchPost = (req, res) => {
  const { topic, text } = req.body;

  posts.forEach((post) => {
    if (post.id === req.params.id) {
      (post.topic = topic), (post.text = text);
    }
  });
  res.json({ status: "SUCCESS" });
};

const deletePost = (req, res) => {
  posts = posts.filter((item) => item.id !== req.params.id);
  res.json({ posts, status: "SUCCESS" });
};

module.exports = {
  getPosts,
  getPostByID,
  addPost,
  putPost,
  patchPost,
  deletePost,
};
