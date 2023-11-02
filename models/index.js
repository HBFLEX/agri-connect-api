const { Sequelize, DataTypes, Model } = require('sequelize');
const dbInfo = require('../config/dbConfig'); 

// instantiating a db connection -> mysql DB
const sequelize = new Sequelize(
    dbInfo.db,
    dbInfo.user,
    dbInfo.password,
    {
        host: dbInfo.host,
        dialect: dbInfo.dialect,
    }
);

// run the db connection
sequelize.authenticate()
.then(() => {
    console.log('connected to db successfully!');
})
.catch((err) => {
    console.log('There was an error connecting to db -> ', err);
});

// create sequelize references and db models
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./User')(sequelize, DataTypes, Model);
db.posts = require('./Post')(sequelize, DataTypes, Model);
db.comments = require('./Comment')(sequelize, DataTypes, Model);
db.likes = require('./Like')(sequelize, DataTypes, Model);
db.products = require('./Product')(sequelize, DataTypes, Model);
db.product_status = require('./ProductStatus')(sequelize, DataTypes, Model);

db.sequelize.sync({ force: false, alter: true })
.then(() => {
    console.log('all tables synchronized successfully!');
})
.catch((err) => {
    console.log('There was an error syncing the tables ->', err);
});

// relationships
// user -> posts (one user many post)
db.users.hasMany(db.posts, { foreignKey: 'post_author_id' });
db.posts.belongsTo(db.users, { foreignKey: 'post_author_id' });

//post -> comments (one post many comments)
db.posts.hasMany(db.comments, { foreignKey: 'post_id' });
db.comments.belongsTo(db.posts, { foreignKey: 'post_id' });

// user -> comments(one user many comments)
db.users.hasMany(db.comments, { foreignKey: 'comment_author_id' });
db.comments.belongsTo(db.users, { foreignKey: 'comment_author_id' });

// user -> likes(one user one like)
db.users.hasOne(db.likes, { foreignKey: 'user_id' });
db.likes.belongsTo(db.users, { foreignKey: 'user_id' });

// posts -> likes(one post many likes)
db.posts.hasMany(db.likes, { foreignKey: 'post_id' });
db.likes.belongsTo(db.posts, { foreignKey: 'post_id' });

// user -> products(one user many products)
db.users.hasMany(db.products, { foreignKey: 'product_owner_id' });
db.products.belongsTo(db.users, { foreignKey: 'product_owner_id' });

// product -> product_status(one product has one product_status)
db.product_status.hasOne(db.products, { foreignKey: 'product_status_id' });
db.products.belongsTo(db.product_status, { foreignKey: 'product_status_id' });



module.exports = db;