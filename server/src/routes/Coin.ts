import { Router } from "express";

import CoinCallback from "../controller/Coin";
const CoinRouter = Router();

CoinRouter.get("/", CoinCallback.get);
CoinRouter.post("/", CoinCallback.create);
CoinRouter.put("/:id", CoinCallback.update);
CoinRouter.delete("/:id", CoinCallback.delete);

export default CoinRouter;
