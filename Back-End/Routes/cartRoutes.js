const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} = require("../Controllers/cartController");
const authMiddleware = require("../Middleware/middleware");

const router = express.Router();

router.get("/", authMiddleware, getCart);
router.post("/add", authMiddleware, addToCart);
router.post("/remove", authMiddleware, removeFromCart);
router.post("/clear", authMiddleware, clearCart);

module.exports = router;

