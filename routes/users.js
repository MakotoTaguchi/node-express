const express = require('express');
const router = express.Router();
const db = require('../models/index');
const {
  Op
} = require("sequelize");

/* GET users listing. */
router.get('/', (req, res, next) => {
  const id = req.query.id;
  const nm = req.query.name;
  db.User.findAll({
    where: {
      // id: id
      // id: {
      //   [Op.lte]: id
      // },
      name: {
        [Op.like]: '%' + nm + '%'
      }
    }
  }).then(usrs => {
    var data = {
      title: 'Users/Index',
      content: usrs
    }
    res.render('users/index', data);
  });
  // db.User.findAll().then(usrs => {
  //   var data = {
  //     title: 'Users/Index',
  //     content: usrs
  //   }
  //   res.render('users/index', data);
  // });
});

module.exports = router;