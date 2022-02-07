// Traigo los modulos para acceder a la db.
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = sequelize.Op;


const productApiController = {
    //lista los productos la api
    list: (req, res) => {
        let producto = [];
        let cantidad_ofertas =0;
        let cantidad_promociones = 0;
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brand = db.Brand.findAll();
        let product = db.Product.findAll({
            include: ["colors", "brands", "product_categories"],
        });
        Promise.all([product, color, category, brand])
            .then((product) => {
                product[0].map((row) => {
                    producto.push({
                        id: row.id,
                        brand: row.brands,
                        model: row.model,
                        image: "http://localhost:3001/products/" + row.image,
                        stock: row.stock,
                        price: row.price,
                        product_categories_id: row.product_categories,
                        color: row.color,
                        description: row.description,
                    });

                    if(row.product_categories.id== 1){
                        cantidad_ofertas = cantidad_ofertas +1;
                    }else{cantidad_promociones = cantidad_promociones +1}
                
                });
                return res.status(200).json({
                    meta: {
                        total: product[0].length,
                        cantidad_ofertas: cantidad_ofertas,
                        cantidad_promociones: cantidad_promociones,
                        status: 200,
                    },
                    data: producto,
                });
            })
            .catch((error) => {
                console.log("error: " + error);
                return res.status(500).json({
                    mensaje: "No se pudo obtener el listado de productos",
                    status: 500,
                });
            });
    },

    show: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brand = db.Brand.findAll();
        let product = db.Product.findByPk(req.params.id, {
            include: ["colors", "brands", "product_categories"],
        });
        Promise.all([product, color, category, brand])
            .then((product) => {
                if (product.length > 0) {
                    let producto = {
                        id: product[0].id,
                        brand: product[0].brands,
                        model: product[0].model,
                        image:
                            "http://localhost:3001/products/" +
                            product[0].image,
                        stock: product[0].stock,
                        price: product[0].price,
                        product_categories_id: product[0].product_categories,
                        color: product[0].color,
                        description: product[0].description,
                    };
                    return res.status(200).json({
                        meta: {
                            status: 200,
                        },
                        data: producto,
                    });
                }
            })
            .catch((error) => {
                console.log("error: " + error);
                return res.status(404).json({
                    mensaje: "Producto no encontrado",
                    status: 404,
                });
            });
    },
    // Trae el último producto creado
    lastProductCreated: (req, res) => {
        let color = db.Color.findAll();
        let category = db.ProductCategory.findAll();
        let brand = db.Brand.findAll();
        let product = db.Product.findOne({
            include: ["colors", "brands", "product_categories"],
            order: [["id", "DESC"]],
            limit: 1,
        });
        Promise.all([product, color, category, brand])
            .then((product) => {
                console.log("marcas" + brand);
                if (product.length > 0) {
                    let producto = {
                        id: product[0].id,
                        brand: product[0].brands,
                        model: product[0].model,
                        image:
                            "http://localhost:3001/products/" +
                            product[0].image,
                        stock: product[0].stock,
                        price: product[0].price,
                        product_categories_id: product[0].product_categories,
                        color: product[0].color,
                        description: product[0].description,
                    };
                    return res.status(200).json({
                        meta: {
                            status: 200,
                        },
                        data: producto,
                    });
                }
            })
            .catch((error) => {
                console.log("error: " + error);
                return res.status(404).json({
                    mensaje: "Producto no encontrado",
                    status: 404,
                });
            });
    },

    totals: (req, res) => {
        let totals = [];
        let brand = db.Brand.findAll();
        let product = db.Product.findAll();
        Promise.all([brand, product])
            .then((brand) => {
                brand[0].map((row) => {
                    let cont = 0;
                    brand[1].map((prod) => {
                        if (prod.brand_id == row.id) {
                            cont = cont + 1;
                        }
                    });
                    totals.push({
                        id: row.id,
                        name: row.name,
                        totals: cont,
                    });
                });
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total_brand: totals.length
                    },
                    data: {
                        totals: totals
                    }
                });
            })
            .catch((error) => {
                console.log("error: " + error);
                return res.status(500).json({
                    mensaje: "No se pudo obtener el listado de productos",
                    status: 500,
                });
            });
    },
}

module.exports = productApiController;