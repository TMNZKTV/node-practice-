const express = require("express");

const router = new express.Router();

// Создали отдельные функции валидации
const { addPostValidation } = require("../midllewares/validationMiddleware");

const { authMiddleware } = require("../midllewares/authMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");

// Cоздали контроллеры
const {
  getPostsController,
  getPostByIDController,
  addPostController,
  changePostController,
  deletePostController,
} = require("../controllers/postController");

router.use(authMiddleware);

router.get("/", asyncWrapper(getPostsController));

router.get("/:id", asyncWrapper(getPostByIDController));

router.post("/", addPostValidation, asyncWrapper(addPostController));

router.put("/:id", addPostValidation, asyncWrapper(changePostController));

router.delete("/:id", asyncWrapper(deletePostController));

module.exports = {
  postsRouter: router,
};
