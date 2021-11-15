import mongoose from "mongoose";
import UserSchema, { UserDoc } from "./User";
import CoinSchema, { CoinDoc } from "./Coin";

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
const CoinModel = mongoose.model<CoinDoc>("Coin", CoinSchema);

export { UserModel, CoinModel };
