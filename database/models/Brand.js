module.exports = (sequelize,dataTypes) =>{
    let alias = "Brands";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        }
        
    }

    let config = {
        tableName : 'brands',
        timestamps: false
    }
    const Brand = sequelize.define(alias, cols, config);

    return Brand;
}