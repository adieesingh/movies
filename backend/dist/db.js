import mongoose, { connect, Model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGOOSE_URL || "").then(() => console.log(`connected to mongodb`)).catch((err) => { `Not connected to mongodb ${err}`; });
const UserSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });
// movie schema
const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    // release date in Minute
    releaseDate: { type: Date, default: Date.now() },
    duartion: { type: Number, required: true }
});
export const Movie = mongoose.model('Movie', MovieSchema);
export const User = mongoose.model('User', UserSchema);
//# sourceMappingURL=db.js.map