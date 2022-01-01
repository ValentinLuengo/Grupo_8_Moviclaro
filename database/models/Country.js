module.exports = (sequelize,dataTypes) =>{
    let alias = "Countries";
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
        tableName : 'countries',
        timestamps: false
    }
    const Country = sequelize.define(alias, cols, config);

    return Country;
}