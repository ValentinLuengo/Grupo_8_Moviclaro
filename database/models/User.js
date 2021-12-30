

module.exports = (sequelize,dataTypes) =>{
    let alias = "Users";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {type: dataTypes.STRING},
        last_name: {type: dataTypes.STRING},
        category_id: {type: dataTypes.INTEGER},
        image: {type: dataTypes.STRING},
        country_id: {type: dataTypes.INTEGER},
        password: {type: dataTypes.STRING},
        email: {type: dataTypes.STRING},
        phone: {type: dataTypes.STRING}

    }

    let config = {
        tableName : 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User;
}