"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersDataByAuth0Id = exports.getAllUsers = exports.checkUser = void 0;
const user_1 = require("../models/user");
const checkUser = async (req, res, next) => {
    // if (req) {
    //   const userAuth0IdInRequest: string = req.params.userAuth0Id
    //   const findUser = await User.findOne({ auth0Id: userAuth0IdInRequest })
    //   if (!findUser) {
    //     const user = new User({
    //       auth0Id: userAuth0IdInRequest,
    //     })
    //     await user.save()
    //     if (user) {
    //       res.status(200).json({
    //         message:
    //           "We couldn't find a user withh the requested id, we created a new one.",
    //         user,
    //       })
    //     }
    //     res.status(200).json({ message: "Something goes wrong" })
    //   }
    //   res.json(findUser)
    // }
    res.json({ message: "ok" });
};
exports.checkUser = checkUser;
const getAllUsers = async (req, res, next) => {
    if (req) {
        const allUsers = await user_1.User.find();
        res.json(allUsers);
    }
};
exports.getAllUsers = getAllUsers;
const getUsersDataByAuth0Id = async (req, res, next) => {
    if (req) {
        const userAuth0IdInRequest = req.params.userAuth0Id;
        if (userAuth0IdInRequest) {
            res.json(userAuth0IdInRequest);
        }
        res.json({ message: "Please provide user id" });
    }
};
exports.getUsersDataByAuth0Id = getUsersDataByAuth0Id;
