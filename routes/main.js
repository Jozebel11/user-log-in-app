const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/api", homeController.getIndex);
router.get("/api/profile", ensureAuth, postsController.getProfile);
router.get("/api/feed", ensureAuth, postsController.getFeed);
router.get("/api/login", authController.getLogin);
router.post("/api/login", authController.postLogin);
router.get("/api/logout", authController.logout);
router.get("/api/signup", authController.getSignup);
router.post("/api/signup", authController.postSignup);

module.exports = router;
