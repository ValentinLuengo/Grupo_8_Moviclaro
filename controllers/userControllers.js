const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User = require("../models/User");
let db = require("../database/models");

const userController = {
  registro: (req, res) => {
    let countries = db.Country.findAll().then(function (countries) {
      res.render("users/register", { countries: countries });
    });
  },

  storeUser: (req, res) => {
    const resultsValidation = validationResult(req);
    const countries = db.Country.findAll();
    let userInDb = db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    Promise.all([userInDb, countries]).then(function ([userInDb, countries]) {
      if (resultsValidation.errors.length > 0) {
        return res.render(path.join(__dirname, "../views/users/register"), {
          errors: resultsValidation.mapped(),
          oldData: req.body,
          countries: countries,
        });
      }
      if (userInDb) {
        return res.render(path.join(__dirname, "../views/users/register"), {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          oldData: req.body,
          countries: countries,
        });
      }

      if (req.body.password !== req.body.password2) {
        return res.render(path.join(__dirname, "../views/users/register"), {
          errors: {
            password2: {
              msg: "Las contraseñas no coinciden",
            },
          },
          oldData: req.body,
          countries: countries,
        });
      }

      db.User.create({
        include: ["countries"],
        name: req.body.name,
        last_name: req.body.last_name,
        category_id: 1,
        image: req.file.filename,
        country_id: req.body.country_id,
        password: bcryptjs.hashSync(req.body.password, 10),
        email: req.body.email,
        phone: req.body.phone,
      });
      return res.render(path.join(__dirname, "../views/users/login"));
    });
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/users/login"));
  },

  processLogin: (req, res) => {
    let userToLogin;
    let userAdmin;

    db.User.findOne({
      include: ["countries"],
      where: {
        email: req.body.email,
      },
    }).then((resultado) => {
      userToLogin = resultado;
      if (userToLogin.email) {
        userAdmin = userToLogin.category_id;
        let passwordOk = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (passwordOk) {
          delete userToLogin.password;
          delete userToLogin.password2;
          req.session.userLogged = userToLogin;

          if (req.body.recordame) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 3000 });
          }

          return res.redirect("/user");
        }else{
          return res.render(path.join(__dirname, "../views/users/login"), {
            oldData: req.body.email,
            errors: {
              
              email: {
                msg: "Las credenciales son invalidas",
              },
            },
          })
        }
      
        }
      })
      .catch((errors) => { 
        return res.render(path.join(__dirname, "../views/users/login"), {
        oldData: req.body.email,
        errors: {
          
          email: {
            msg: "Las credenciales son invalidas",
          },
        },
      });})

  
  },
  
  user: (req, res) => {
    const userLogged = req.session.userLogged;
    //     const usuario =
    db.User.findOne({
      include: ["countries"],
      where: {
        email: userLogged.email,
      },
    }).then((user) => {
      return res.render(path.join(__dirname, "../views/users/userPerfil"), {
        user,
      });
    });
  },


  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();

    res.redirect("/");
  },

  //eliminar un usuario
  destroy: (req, res) => {
    const userId = req.params.id;
    db.User.destroy({
      where: { id: userId },
    }).then(() => {
      res.clearCookie(req.params.email);
      req.session.destroy();
      res.redirect("/");
    });
  },

  //abrir pagina de edición de usuario

  edit: function (req, res) {
    let country = db.Country.findAll();
    let userId = req.params.id;
    let user = db.User.findByPk(userId, {
      include: [{ association: "countries" }],
    });
    Promise.all([user, country])
      .then(([user, country]) => {
        res.render("users/userEdit", { user: user, country: country });
      })
      .catch((error) => res.send(error));
  },

  //guardar datos editados el usuario

  update: async (req, res) => {
    let newPassword = "";
    let resultadoValidacion = validationResult(req);
    let user= {}
    if (resultadoValidacion.errors.length < 1) {
      user =  {
        id: req.body.id,
        name: req.body.name,
        last_name: req.body.last_name,
        image: req.file ? req.file.filename : req.body.oldImage,
        email: req.body.email,
        phone: req.body.phone,
        country_id: req.body.country_id,
        //password: req.body.password 
       // password2 : req.body.password2
      }
      let userId = req.params.id;
      if (req.body.password ==""){
      await db.User.update(
        {
          name: req.body.name,
          last_name: req.body.last_name,
          image: req.file ? req.file.filename : req.body.oldImage,
          email: req.body.email,
          phone: req.body.phone,
          country_id: req.body.country_id,
          //password: req.body.password 
         // password2 : req.body.password2
        },
        {
          where: { id: userId },
        }
      )
        .then(() => {

          req.session.userLogged.image = user.image;
          return res.redirect("/user");
          
        })
        .catch((error) => {
        console.log(error)
      })
      }else{
        await db.User.update(
          {
            name: req.body.name,
            last_name: req.body.last_name,
            image: req.file ? req.file.filename : req.body.oldImage,
            email: req.body.email,
            phone: req.body.phone,
            country_id: req.body.country_id,
            password: bcryptjs.hashSync(req.body.password, 10)
           // password2 : req.body.password2
          },
          {
            where: { id: userId },
          }
        )
          .then(() => {
            return res.redirect("/user");
            
          })
          .catch((error) => {
          console.log(error)
        })

      }  
    } else {
      let country = await db.Country.findAll();
      let userInDb = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      await db.User.update(
        {
          name: req.body.name ? req.body.name : req.body.oldData,
          last_name: req.body.last_name ? req.body.last_name : req.body.oldData,
          image: req.file ? req.file.filename : req.body.oldImage,
          email: req.body.email ? req.body.email : req.body.oldData,
          phone: req.body.phone ? req.body.phone : req.body.oldData,
          country_id: req.body.country_id ? req.body.country_id : req.body.oldData,
          password: newPassword ? newPassword : req.body.password,
         // password2: req.body.password ? newPassword : req.body.password2
        },
        {
          where: { id: req.params.id },
        }
      );

      Promise.all([userInDb, country])
        .then(function ([userInDb, country]) {
          return res.render("users/userEdit", {
            errors: resultadoValidacion.mapped(),
            oldData: req.body,
            oldImage: req.body,
            user: userInDb,
            country: country,
          })
        })
        .catch((error) => res.send(error));
      console.log(resultadoValidacion.errors)
    }
  },

  
};

module.exports = userController;
