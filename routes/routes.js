import express from "express";
import { decodebody } from "../controllers/decodebody.js";
import { encodebody } from "../controllers/encodebody.js";
import { Storetodo } from "../controllers/storetodo.js";
import { retrievetodo, deletetodo } from "../controllers/storetodo.js";
const router = express.Router();
router.post("/decode", decodebody);
router.post("/encode", encodebody);
router.post("/store", Storetodo);
router.post("/gettodo", retrievetodo);
router.post("/delete", deletetodo);
export default router;
