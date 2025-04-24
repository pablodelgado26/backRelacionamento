import express from "express";
import cardController from "../controllers/cardController.js";

const cardRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
cardRouter.get("/", cardController.getAllCards);

// GET /colecoes/:id - Obter um Personagem pelo ID
 cardRouter.get("/:id", cardController.getCardById);

// POST /colecoes - Criar uma nova Cards
cardRouter.post("/", cardController.createCard);

// PUT /colecoes/:id - Atualizar um Cards
cardRouter.put("/:id", cardController.updateCard);

// DELETE /colecoes/:id - Remover um Cards
cardRouter.delete("/:id", cardController.deleteCard);

export default cardRouter;
