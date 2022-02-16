const path = require("path");
const fs = require("fs");

let { check, validationResult, body } = require("express-validator");
const validations = require("../middlewares/productMiddleware.js");

// Traigo los modulos para acceder a la db.
const db = require("../database/models");
const { promiseImpl } = require("ejs");
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const publicPath = path.resolve(__dirname, "./public");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req, res) => {
        let offersProducts = [];
        let promotionsProducts = [];
        db.Product.findAll({
            where: { product_categories_id: 1 },
            include: ["colors", "brands", "product_categories"],
        })
            .then((products1) => {
                offersProducts = products1;
                db.Product.findAll({
                    where: { product_categories_id: 2 },
                    include: ["colors", "brands", "product_categories"],
                }).then((products2) => {
                    promotionsProducts = products2;
                    res.render("index", {
                        promotionsProducts,
                        offersProducts,
                        toThousand,
                    });
                });
            })
            .catch((error) => console.log(error));
    },
    store: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brand = db.Brand.findAll();
        let product = db.Product.findAll({
            include: ["colors", "brands", "product_categories"],
        });
        Promise.all([product, color, category, brand])
            .then(function ([product, color, category, brand]) {
                res.render(path.join(__dirname, "../views/products/store"), {
                    product: product,
                    color: color,
                    category: category,
                    brand: brand,
                    toThousand,
                });
            })
            .catch((error) => console.log(error));
    },
    nuevoProducto: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brands = db.Brand.findAll();

        Promise.all([color, category, brands]).then(function ([
            color,
            category,
            brands,
        ]) {
            res.render("products/productCreate", {
                color: color,
                category: category,
                brands: brands,
                toThousand,
            });
        });
    },

    storeProduct: (req, res) => {
        // const resultsValidation = validationResult(req)

        //     if (resultsValidation.errors.length > 0) {
        //         return res.render(path.join(__dirname, '../views/products/store'), {
        //             errors: resultsValidation.mapped(),
        //             oldData: req.body,
        //         });
        //     }
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            // PRUEBO INVERTIR EL IF
            let color = db.Color.findAll();
            let category = db.ProductCategory.findAll();
            let brands = db.Brand.findAll();
            console.log(resultadoValidacion.errors);

            Promise.all([color, category, brands]).then(
                ([color, category, brands]) => {
                    return res
                        .render("products/productCreate", {
                            errors: resultadoValidacion.mapped(),
                            oldData: req.body,
                            image: req.file,
                            color: color,
                            category: category,
                            brands: brands,
                            toThousand,
                        })
                        .catch((errors) => console.log(errors));
                }
            );
        } else {
            db.Product.create({
                include: ["brands", "colors"],
                brand_id: req.body.marca,
                model: req.body.modelo,
                stock: req.body.stock,
                price: req.body.precio,
                image: req.file.filename,
                product_categories_id: req.body.category,
                color_id: req.body.color,
                description: req.body.descripcion,
            })
                .then(() => {
                    res.redirect("/store");
                })
                .catch((err) => console.log(err));
        }

        // }else{
        // // ESTO LO  PASO A ARRIBA
        //         let color = db.Color.findAll()
        //         let category = db.ProductCategory.findAll()
        //         let brands = db.Brand.findAll()
        //         console.log(resultadoValidacion.errors);

        //         Promise.all([color, category, brands])
        //             .then( ([color, category, brands]) => {
        //                 res.render('products/productCreate', {
        //                     errors: resultadoValidacion.mapped(),
        //                     oldData: req.body,
        //                     color: color,
        //                     category: category,
        //                     brands: brands
        //                 })
        //             }).catch(errors => console.log(errors))
    },

    edit: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brands = db.Brand.findAll();
        let id = req.params.id;
        let product = db.Product.findByPk(id, {
            include: [
                { association: "brands" },
                { association: "colors" },
                { association: "product_categories" },
            ],
        });
        Promise.all([product, color, category, brands]).then(function ([
            product,
            color,
            category,
            brands,
        ]) {
            res.render("products/productEdit", {
                product: product,
                color: color,
                category: category,
                brands: brands,
                toThousand,
            });
        });
    },

    update: async (req, res) => {
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            let color = await db.Color.findAll();
            let category = await db.ProductCategory.findAll();
            let brands = await db.Brand.findAll();
            let product = await db.Product.findByPk(req.params.id, {
            include: [
                { association: "brands" },
                { association: "colors" },
                { association: "product_categories" },
            ],
        });
            
            console.log(resultadoValidacion.errors);
            Promise.all([color, category, brands, product]).then(
                ([color, category, brands, product]) => {
                    return res.render("products/productEdit", {
                            errors: resultadoValidacion.mapped(),
                            oldData: req.body,
                            image: req.file ? req.file.filename : req.body.image,
                            color: color,
                            category: category,
                            brands: brands,
                            product: product,
                            toThousand
                        })
                        .catch((errors) => console.log(errors));
                }
            );
        } else {
           await db.Product.update(
                {
                    brand_id: req.body.marca,
                    model: req.body.modelo,
                    stock: req.body.stock,
                    price: req.body.precio,
                    image: req.file ? req.file.filename : req.body.image,
                    product_categories_id: req.body.category,
                    color_id: req.body.color,
                    description: req.body.descripcion,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
                .then(() => {
                    // res.render("/detalle/" + req.params.id)
                    res.redirect("/detalle/" + req.params.id);
                })
                .catch((err) => console.log(err));
        }
    },

    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/store");
    },

    productDetail: (req, res) => {
        const requestedId = req.params.id;
        let pathDetalle = path.join(
            __dirname,
            "../views/products/productDetail"
        );
        db.Product.findByPk(requestedId, {
            include: ["colors", "brands", "product_categories"],
        })
            .then((product) => {
                res.render(pathDetalle, { product, toThousand });
            })
            .catch((error) => console.log(error));
        /*const requiredId = req.params.id;
        let pathDetalle = path.join(
            __dirname,
            "../views/products/productDetail"
        );
        let product = db.Product.findAll({
            where: {
                id: requiredId,
            },
        })
        if (product)  {
            db.Product.findByPk(requiredId, {
                include: ["colors", "brands", "product_categories"],
            })
                .then((product) => {
                    res.render(pathDetalle, { product, toThousand });
                })
                .catch((error) => console.log(error));
        }else {
            const descriptionError =
                "El producto con el id: " + req.params.id + " no existe";
            res.render("products/notFound", { descriptionError });
        }*/
    },

    agregarCarrito: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brands = db.Brand.findAll();
        let detail = this.productDetail;
        const requiredId = req.params.id;

        console.log(requiredId);
        let product = db.Product.findAll({
            where: {
                id: detail,
            },
            include: ["colors", "brands", "product_categories"],
        });
        Promise.all([product, color, category, brands, detail])
            .then(function ([product, color, category, brands, detail]) {
                res.render("products/productCart", {
                    product: product,
                    color: color,
                    category: category,
                    brands: brands,
                    detail: detail,
                    toThousand,
                });
            })
            .catch((error) => console.log(error));
    },

    //     res.render(path.join(__dirname, "../views/products/productCart"));

    create: (req, res) => {
        res.render(path.join(__dirname, "../views/products/productCreate"));
    },

    storeUser: (req, res) => {
        return res.send(req.body);

        // const user = req.body;
        // if (user.password != user.password2) {
        //     res.send("las contraseñas no coinciden")
        // } else {
        //     user.id = users[users.length - 1].id + 1;
        //     users.push(user);
        //     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '))
        //     res.redirect('/')
        // }
    },

    search: async (req, res) => {
        const searchQueryBrand = req.query.keyword;
        const searchQuery = req.query.search;
        //console.log(searchQuery + "------------")
        //console.log(searchQueryBrand + " Brand")
        if (searchQuery) {
            await db.Product.findAll({
                where: {
                    model: { [Op.like]: "%" + searchQuery + "%" },
                },
                order: [["model", "DESC"]],
                include: ["colors", "brands", "product_categories"],
            })
                .then((product) => {
                    res.render("products/productSearch.ejs", {
                        product,
                        toThousand,
                    });
                }, [])
                .catch((error) => console.log(error));

            if (searchQueryBrand) {
                await db.Brand.findAll({
                    where: {
                        name: { [Op.like]: "%" + searchQueryBrand + "%" },
                    },
                    include: ["products"],
                })
                    .then((brand) => {
                        res.render("products/productSearch.ejs", {
                            brand,
                            products,
                            toThousand,
                        });
                    }, [])
                    .catch((error) => console.log(error));
            }
        }
    },

    carritoDelete: (req, res) => {
        productsService.deleteByIdCarrito(req.params.id);
        res.redirect("/products/carrito");
    },

    notFound: (req, res) => {
        let product = db.Product.findAll();
        if (req.params.id > product.length) {
            const descriptionError =
                "The product with id " + req.params.id + " doesn't exists";
            res.render("notFound", { descriptionError });
        }
    },
};

module.exports = mainController;
