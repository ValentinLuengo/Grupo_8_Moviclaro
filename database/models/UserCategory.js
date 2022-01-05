module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory";
    let cols = {
        user_category_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: 'user_categories',
        timestamps: false
    }
    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models) {

        UserCategory.hasMany(models.User, {
            as: "users",
            foreignKey: "category_id"
        });
    }

    return UserCategory;
}