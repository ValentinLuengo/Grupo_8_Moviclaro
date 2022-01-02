module.exports = (sequelize, dataTypes) => {
    let alias = "Color";
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
        tableName: 'colors',
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {

        Color.hasMany(models.Product, {
            as: "product",
            foreignKey: "color_id"
        })
    }

    return Color;
}