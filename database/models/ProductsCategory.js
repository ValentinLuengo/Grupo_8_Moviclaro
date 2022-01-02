module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategory";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'product_categories',
        timestamps: false
    }
    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models) {

        ProductCategory.hasMany(models.Product, {
            as: "product",
            foreignKey: "product_categories_id"
        })
    }

    return ProductCategory;
}