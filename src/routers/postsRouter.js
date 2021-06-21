const express = require("express");

const router = new express.Router();

// Создали отдельные функции валидации
const {
  addPostValidation,
  // patchPostValidation,
} = require("../midllewares/validationMiddleware");

const { asyncWrapper } = require("../helpers/apiHelpers");

const modelsMiddleware = require("../midllewares/models");

// Cоздали контроллеры
const {
  getPosts,
  getPostByID,
  addPost,
  putPost,
  // patchPost,
  deletePost,
} = require("../controllers/postController");

// Для всех запросов
router.use(modelsMiddleware);

// Возвращаем все посты
router.get("/", asyncWrapper(getPosts));

// Фильтруем посты по нужному ID, деструктурируем, возвращаем пост в ответе.
router.get("/:id", asyncWrapper(getPostByID));

// В посты пушим новый объект с топиком и текстом
router.post("/", addPostValidation, asyncWrapper(addPost));

// Перебираем посты.
// Если ID поста равен ID клиента, подменяем текст и топик из тела.
router.put("/:id", addPostValidation, asyncWrapper(putPost));

// Перебираем посты.
// Если ID поста равен ID клиента, подменяем ЛИБО текст, ЛИБО топик из тела.
// router.patch("/:id", patchPostValidation, patchPost);

// Посты - все посты, не имеющие id, который отправил клиент
router.delete("/:id", asyncWrapper(deletePost));

module.exports = {
  postsRouter: router,
};
