const express = require("express");

const router = new express.Router();

// Создали отдельные функции валидации
const { addPostValidation } = require("../midllewares/validationMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");

// const modelsMiddleware = require("../midllewares/models");

// Cоздали контроллеры
const {
  getPostsController,
  getPostByIDController,
  addPostController,
  changePostController,
  deletePostController,
} = require("../controllers/postController");

// Возвращаем все посты
router.get("/", asyncWrapper(getPostsController));

// Фильтруем посты по нужному ID, деструктурируем, возвращаем пост в ответе.
router.get("/:id", asyncWrapper(getPostByIDController));

// В посты пушим новый объект с топиком и текстом
router.post("/", addPostValidation, asyncWrapper(addPostController));

// Перебираем посты.
// Если ID поста равен ID клиента, подменяем текст и топик из тела.
router.put("/:id", addPostValidation, asyncWrapper(changePostController));

// Посты - все посты, не имеющие id, который отправил клиент
router.delete("/:id", asyncWrapper(deletePostController));

module.exports = {
  postsRouter: router,
};
