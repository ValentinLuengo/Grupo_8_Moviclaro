module.exports = (sequelize,dataTypes) =>{
    let alias = "Products";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        brand_id:{
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
        tableName : 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    return Product;
}