import express from "express";
import {
    getHalls,
    getHallById,
    createHall,
    updateHall,
    deleteHall
} from "../controllers/Halls.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/halls', verifyUser, getHalls);
router.get('/halls/:id', verifyUser, getHallById);
router.post('/halls', verifyUser, createHall);
router.patch('/halls/:id', verifyUser, updateHall);
router.delete('/halls/:id', verifyUser, deleteHall);

export default router;