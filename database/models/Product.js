module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        model: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.FLOAT
        },
        image: {
            type: dataTypes.STRING
        },
        product_categories_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        }


    }

    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
        })

        Product.belongsTo(models.Color, {
            as: "colors",
            foreignKey: "color_id"
        })

        Product.belongsTo(models.ProductCategory, {
            as: 'product_categories',
            foreignKey: 'product_categories_id'
        })

    }

    return Product;
}