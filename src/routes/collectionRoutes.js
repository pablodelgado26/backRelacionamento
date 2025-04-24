import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /colecoes/:id - Obter um Personagem pelo ID
 collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /colecoes - Criar uma nova Collections
collectionRouter.post("/", CollectionController.createCollection);

// PUT /colecoes/:id - Atualizar um Collections
collectionRouter.put("/:id", CollectionController.updateCollection);

// DELETE /colecoes/:id - Remover um Collections
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;
