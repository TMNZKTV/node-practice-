const express = require("express");

const router = new express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers");

// Cоздали контроллеры для authRouter
const {
  registrationController,
  loginController,
} = require("../controllers/authController");

// Созадем раут на регистрацию
router.post("/registration", asyncWrapper(registrationController));

// Создаем раут на логин
router.post("/login", asyncWrapper(loginController));

module.exports = {
  authRouter: router,
};
