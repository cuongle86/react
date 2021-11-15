import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface CoinDoc extends Document {
    CoinID: string;
    coinName: string;
    lastPrice: number;
}
  
const CoinSchema = new Schema<CoinDoc>({
    CoinID: defaultType.string,
    coinName: defaultType.string,
    lastPrice: defaultType.number
});
  
export default CoinSchema;