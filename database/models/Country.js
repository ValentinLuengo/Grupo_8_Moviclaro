module.exports = (sequelize,dataTypes) =>{
    let alias = "Country";
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

    Country.associate = function(models) {

        Country.hasMany(models.User, {
            as: "users",
            foreignKey: "country_id"
        })
    }

    return Country;
}