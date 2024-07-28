import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("home");
});

router.get("/market", (req: Request, res: Response, next: NextFunction) => {
  res.render("market");
});

router.get("/product", (req: Request, res: Response, next: NextFunction) => {
  res.render("product");
});

router.get("/account", (req: Request, res: Response, next: NextFunction) => {
  res.render("account");
});

router.get("/profile", (req: Request, res: Response, next: NextFunction) => {
  res.render("profile");
});

router.get("/inventory", (req: Request, res: Response, next: NextFunction) => {
  res.render("inventory");
});

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.render("login");
});

router.get("/register", (req: Request, res: Response, next: NextFunction) => {
  res.render("register");
});

router.get(
  "/requestLink",
  (req: Request, res: Response, next: NextFunction) => {
    res.render("requestLink");
  }
);

router.get(
  "/resetPassword",
  (req: Request, res: Response, next: NextFunction) => {
    res.render("resetPassword");
  }
);

export default router;
