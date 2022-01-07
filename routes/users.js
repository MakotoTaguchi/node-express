const express = require('express');
const router = express.Router();
const db = require('../models/index');
const {
  Op
} = require("sequelize");
const {
  route
} = require('express/lib/application');

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
      // [Op.or]: [{
      //     name: {
      //       [Op.like]: '%' + nm + '%'
      //     }
      //   },
      //   {
      //     mail: {
      //       [Op.like]: '%' + ml + '%'
      //     }
      //   }
      // ]
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

router.get('/add', (req, res, next) => {
  var data = {
    title: 'User/Add',
    form: new db.User(),
    err: null
  }
  res.render('users/add', data);
});

router.post('/add', (req, res, next) => {
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    mail: req.body.mail,
    age: req.body.age
  };
  db.sequelize.sync().then(() => db.User.create(form).then(usr => {
    res.redirect('/users')
  }).catch(err => {
    var data = {
      title: 'User/Add',
      form: form,
      err: err
    }
    res.render('users/add', data);
  }))
});

router.get('/edit', (req, res, next) => {
  db.User.findByPk(req.query.id).then(usr => {
    var data = {
      title: 'User/Edit',
      form: usr
    }
    res.render('users/edit', data);
  });
});

router.post('/edit', (req, res, next) => {
  db.User.findByPk(req.body.id).then(usr => {
    usr.name = req.body.name;
    usr.pass = req.body.pass;
    usr.mail = req.body.mail;
    usr.age = req.body.age;
    usr.save().then(() => res.redirect('/users'));
  });
  // db.sequelize.sync().then(() => db.User.update({
  //   name: req.body.name,
  //   pass: req.body.pass,
  //   mail: req.body.mail,
  //   age: req.body.age
  // }, {
  //   where: {
  //     id: req.body.id
  //   }
  // })).then(usr => {
  //   res.redirect('/users');
  // });
});

router.get('/delete', (req, res, next) => {
  db.User.findByPk(req.query.id).then(usr => {
    var data = {
      title: 'Users/Delete',
      form: usr
    }
    res.render('users/delete', data);
  });
});

router.post('/delete', (req, res, next) => {
  db.sequelize.sync().then(() => db.User.destroy({
    where: {
      id: req.body.id
    }
  })).then(usr => {
    res.redirect('/users');
  });
});

router.get('/login', (req, res, next) => {
  var data = {
    title: 'User/Login',
    content: '名前とパスワードを入力してください。'
  }
  res.render('users/login', data);
});

router.post('/login', (req, res, next) => {
  db.User.findOne({
    where: {
      name: req.body.name,
      pass: req.body.pass,
    }
  }).then(usr => {
    if (usr != null) {
      req.session.login = usr;
      let back = req.session.back;
      if (back == null) {
        back = '/';
      }
      res.redirect(back);
    } else {
      var data = {
        title: 'Users/Login',
        content: '名前かパスワードに問題があります。再度入力してください。'
      }
      res.render('users/login', data);
    }
  })
});

module.exports = router;