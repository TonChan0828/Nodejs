var express = require("express");
var router = express.Router();
const db = require("../models/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.User.findAll().then((users) => {
    var data = {
      title: "Users/Index",
      content: users,
    };
    res.render("users/index", data);
  });
});

module.exports = router;
