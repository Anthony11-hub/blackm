"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const pages_1 = __importDefault(require("./routes/pages"));
app.set("view engine", "ejs");
// Serve static files from /dist/public
app.use(express_1.default.static(path_1.default.join(__dirname, "../../dist")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../public")));
app.use("/", pages_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("app started on port 3000");
});
