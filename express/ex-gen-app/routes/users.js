var express = require("express");
var router = express.Router();
const db = require("../models/index");

const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const id = req.query.id;
  db.User.findAll().then((users) => {
    var data = {
      title: "Users/Index",
      content: users,
    };
    res.render("users/index", data);
  });
});

router.get("/add", (req, res, next) => {
  var data = {
    title: "Users/Add",
  };
  res.render("users/add", data);
});

router.post("/add", (req, res, next) => {
  db.sequelize
    .sync()
    .then(() =>
      db.User.create({
        name: req.body.name,
        pass: req.body.pass,
        mail: req.body.mail,
        age: req.body.age,
      })
    )
    .then((users) => {
      res.redirect("/users");
    });
});

module.exports = router;
