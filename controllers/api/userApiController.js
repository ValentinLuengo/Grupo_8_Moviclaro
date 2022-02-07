const path = require("path");

// Traigo los modulos para acceder a la db.
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = sequelize.Op;

const userApiController = {
    list: (req,res)=>{
        let usuarios = []
        let country =  db.Country.findAll();
        let users= db.User.findAll(
          {include: ["countries"]
        })
      
       Promise.all([users])
         .then( (users)=> {
             users[0].map(row => {
               usuarios.push( {
                 id: row.id,
                 
                 name: row.name,
                 last_name: row.last_name,
                 country: row.country,
                 password: row.password,
                 email: row.email,
                 phone: row.phone,
                 image: "http://localhost:3001/avatars/" + row.image,
               });
             });
             return res.status(200).json({
               meta: {
                total: users[0].length,
                 status: 200
               },
               data: usuarios
             });
           })
         .catch((error) => {
           console.log("error: " + error)
           return res.status(500).json(
             {
             mensaje: "No se pudo obtener el listado de usuarios",
             status: 500
           });
         });
    },
  
    show: (req, res)=>{   
      let country =  db.Country.findAll();
      let users = db.User.findByPk(req.params.id, {
        include: ["countries"]
      })
  
      Promise.all([users])
         .then( (users)=> {
          let usuario;
          users.map(row => {
            usuario = {
              id: row.id,
              
              name: row.name,
              last_name: row.last_name,
              country: row.country,
              password: row.password,
              email: row.email,
              phone: row.phone,
              image: "http://localhost:3001/avatars/" + row.image,
            };
          }); 
          return res.status(200).json({
            meta: {
              status: 200,
              imageUrl: "http://localhost:3001/avatars/products",
            },
            data: usuario,
          });
        })
        .catch((error) => console.log(error));
    } ,

    //Trae el último usuario creado
    lastUserCreated: (req, res)=>{  
    let country =  db.Country.findAll();
    let users = db.User.findOne({
      include: ["countries"],
      order: [["id", "DESC"]],
      limit: 1,
    })

    Promise.all([users])
       .then( (users)=> {
        let usuario;
        users.map(row => {
          usuario = {
            id: row.id,
            
            name: row.name,
            last_name: row.last_name,
            country: row.country,
            password: row.password,
            email: row.email,
            phone: row.phone,
            image: "http://localhost:3001/avatars/" + row.image,
          };
        }); 
        return res.status(200).json({
          meta: {
            status: 200,
            imageUrl: "http://localhost:3001/avatars/products",
          },
          data: usuario,
        });
      })
      .catch((error) => console.log(error));
  }


}

module.exports = userApiController