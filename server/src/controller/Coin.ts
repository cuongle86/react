import { Request, Response } from "express";
import { CoinModel } from "../models";
require("dotenv").config();

const secretKey: any = process.env.TOKEN_SECRET_KEY;

export default class CoinCallback {

    static async get(req: Request, res: Response) {
        try {
          const payload = await CoinModel.find()
          return res.json({ success: true, data: payload });
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }
    
      static async create(req: Request, res: Response) {
        try {
          const { coinid, coinname, lastprice } = req.body
    
          const payload = await CoinModel.create({ coinid, coinname, lastprice });
    
          return res.json({ success: true, data: payload });
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }
    
      static async update(req: Request, res: Response) {
        try {
          const { coinid } = req.params
          const { coinname, lastprice } = req.body
    
          const payload = await CoinModel.findOneAndUpdate({ coinid: coinid }, { coinname, lastprice });
    
          return res.json({ success: true, data: payload });
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }
    
      static async delete(req: Request, res: Response) {
        try {
          const CoinID = req.params.coinid;
          const payload = await CoinModel.deleteOne({ _coinid: CoinID });
          return { success: true, data: payload };
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }
}