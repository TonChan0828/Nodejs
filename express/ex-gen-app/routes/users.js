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

router.get("/edit", (req, res, next) => {
  db.User.findByPk(req.query.id).then((users) => {
    var data = {
      title: "Users/Edit",
      form: users,
    };
    res.render("users/edit", data);
  });
});

router.post("/edit", (req, res, next) => {
  db.User.findByPk(req.body.id).then((users) => {
    users.name = req.body.name;
    users.pass = req.body.pass;
    users.mail = req.body.mail;
    users.age = req.body.age;
    users.save().then(() => {
      res.redirect("/users");
    });
  });
});

router.get("/delete", (req, res, next) => {
  db.User.findByPk(req.query.id).then((users) => {
    var data = {
      title: "Users/Delete",
      form: users,
    };
    res.render("users/delete", data);
  });
});

router.post("/delete", (req, res, next) => {
  db.sequelize
    .sync()
    .then(() =>
      db.User.destroy({
        where: { id: req.body.id },
      })
    )
    .then((users) => {
      res.redirect("/users");
    });
});

module.exports = router;
