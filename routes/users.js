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
  const ml = req.query.mail;
  const min = req.query.min * 1
  const max = req.query.max * 1
  db.User.findAll({
    where: {
      // id: id
      // id: {
      //   [Op.lte]: id
      // },
      // name: {
      //   [Op.like]: '%' + nm + '%'
      // }
      // age: {
      //   [Op.gte]: min,
      //   [Op.lte]: max
      // }
      [Op.or]: [{
          name: {
            [Op.like]: '%' + nm + '%'
          }
        },
        {
          mail: {
            [Op.like]: '%' + ml + '%'
          }
        }
      ]
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