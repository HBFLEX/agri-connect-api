module.exports = (sequelize, DataTypes, Model) => {
    class Product extends Model{};

    Product.init({
        name: {
            type: DataTypes.STRING,
        },
        
        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.FLOAT
        },
    }, {sequelize, modelName: 'product'});

    return Product;
}