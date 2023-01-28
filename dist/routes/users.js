"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get("/:userAuth0Id", users_1.checkUser);
//router.get("/", getAllUsers)
//router.get("/:userAuth0Id", getUsersDataByAuth0Id)
router.patch("/:id");
router.delete("/:id");
exports.default = router;
