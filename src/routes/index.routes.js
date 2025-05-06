import express from "express"

// Importar todas as rotas
import authRouter from "./auth.routes.js"
import collectionRouter from "./collectionRoutes.js"
import cardRouter from "./cardRoutes.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

//Rotas públicas
router.use("/auth", authRouter);
router.use("/collections", collectionRouter);
router.use("/cards", cardRouter);

//Rotas protegidas
router.use(authMiddleware)


export default router