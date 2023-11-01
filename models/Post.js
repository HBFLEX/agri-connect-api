module.exports = (sequelize, DataTypes, Model) => {
    class Post extends Model{};

    Post.init({
        postContent: {
            type: DataTypes.TEXT,
        }
    }, {sequelize, modelName: 'post'});

    return Post;
}