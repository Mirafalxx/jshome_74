const express = require("express");
const sendMessage = require("../sendMessage");
const router = express.Router();

router.get("/", (req, res) => {
  sendMessage.getItems();
  res.send("Messages");
});

router.post("/", (req, res) => {
  sendMessage.addItem(req.body);
  res.send(req.body);
});

module.exports = router;
