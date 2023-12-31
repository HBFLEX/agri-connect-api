const { hash_password } = require('../helpers/hash_password');
const db = require('../models');
const User = db.users;
const Post = db.posts


const addUser = async (req, res) => {
    const userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        agriCooperativeName: req.body.agriCooperativeName,
        email: req.body.email,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        phone: req.body.phone,
        district: req.body.district,
        role: req.body.role,
        profilePic: req.body.profilePic    
    };
    // hash password before saving to db
    userInfo.password = await hash_password(userInfo.password);

    const user = await User.create(userInfo);
    res.status(200).json({ message: 'User created successfully!', user: user.id });
}

const getAllUsers = async(req, res) => {
    const users = await User.findAll({});
    res.status(200).json({  message: 'Users fetched successfully!', users: users })
}

const getOneUser = async(req, res) => {
    const user_id = req.params.id;
    const user = await User.findOne({ where: { id: user_id }, include: [Post] });
    res.status(200).json({ message: 'User fetched successfully!', user: user });
}

const updateUser = async(req, res) => {
    const user_id = req.params.id;
    const user = await User.update(req.body, { where: { id: user_id } });
    const updatedUserInfo = await User.findOne({ where: { id: user_id }, include: [Post] })
    res.status(200).json({ message: 'User updated successfully!', user: updatedUserInfo });
}

const deleteUser = async(req, res) => {
    const user_id = req.params.id;
    const user = await User.destroy({ where: { id: user_id } });
    res.status(200).json({ message: 'User deleted successfully!', userID: user });
}

const getAgriCooperatives = async(req, res) => {
    const cooperatives = await User.findAll({ where: { role: 'cooperative' } });
    res.status(200).json({ message: 'Agri-Cooperatives fetched successfully!', cooperatives: cooperatives });
}

const getFarmers = async(req, res) => {
    const farmers = await User.findAll({ where: { role: 'farmer' } });
    res.status(200).json({ message: 'Farmers fetched successfully!', farmers: farmers });
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getAgriCooperatives,
    getFarmers
};