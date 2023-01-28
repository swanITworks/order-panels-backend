"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const createUser = async (req, res, next) => {
    if (req) {
        // const auth0UserId = (req.body as { auth0UserId: string }).auth0UserId
        // const isUserExist: User | undefined = allUsers.find(
        //   user => user.auth0id === auth0UserId
        // )
        // if (isUserExist === undefined) {
        //   const newUser: User = new User(auth0UserId)
        //   USERS.push(newUser)
        //   res.json({ message: "new user created", userId: newUser })
        //   return
        // }
        const user = new user_1.User({
            name: "Roman",
            email: "wm_swan@icloud.com",
            avatar: "OK",
        });
        await user.save();
        console.log(user.email);
        if (user) {
            res.status(200).json({ message: "created" });
        }
    }
};
exports.createUser = createUser;
const getUsers = async (req, res, next) => {
    if (req) {
        res.json({ message: "test2" });
    }
};
exports.getUsers = getUsers;
