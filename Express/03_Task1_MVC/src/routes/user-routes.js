//! ROUTES
import express from "express";
import { getHTMLPage } from "../controllers/user-controllers.js";

const router = express.Router();

router.get("/", getHTMLPage);

export default router;
