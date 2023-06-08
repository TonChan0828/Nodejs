"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "名前を必ず入力してください" } },
      },
      pass: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "パスワードを必ず入力してください" } },
      },
      mail: {
        type: DataTypes.STRING,
        validate: { isEmail: { msg: "メールアドレスを必ず入力してください" } },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { msg: "整数を入力してください" },
          min: { args: [0], msg: "0以上の値が必要です" },
        },
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
