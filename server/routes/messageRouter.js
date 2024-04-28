import express from "express";

import { createMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post('/serviceRequest',createMessage);

export default router;