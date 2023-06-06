var express = require("express");
var router = express.Router();
const db = require("../models/index");

const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const id = req.query.id;
  db.User.findAll({
    where: {
      id: { [Op.lte]: id },
    },
  }).then((users) => {
    var data = {
      title: "Users/Index",
      content: users,
    };
    res.render("users/index", data);
  });
});

module.exports = router;
