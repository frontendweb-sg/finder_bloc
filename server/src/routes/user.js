import { Router } from "express";
import { getProfile } from "../controllers/user.js";
import { auth } from "../middleware/auth.js";

// route
const route = Router();

// get
route.get('/me', auth, getProfile);
export { route as userRoute }