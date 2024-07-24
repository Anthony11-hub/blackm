"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.render("home");
});
router.get("/market", (req, res, next) => {
    res.render("market");
});
exports.default = router;
