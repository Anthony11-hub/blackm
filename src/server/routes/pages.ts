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

export default router;
