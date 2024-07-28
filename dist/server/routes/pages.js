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
router.get("/product", (req, res, next) => {
    res.render("product");
});
router.get("/account", (req, res, next) => {
    res.render("account");
});
router.get("/profile", (req, res, next) => {
    res.render("profile");
});
router.get("/inventory", (req, res, next) => {
    res.render("inventory");
});
router.get("/login", (req, res, next) => {
    res.render("login");
});
router.get("/register", (req, res, next) => {
    res.render("register");
});
router.get("/requestLink", (req, res, next) => {
    res.render("requestLink");
});
router.get("/resetPassword", (req, res, next) => {
    res.render("resetPassword");
});
exports.default = router;
