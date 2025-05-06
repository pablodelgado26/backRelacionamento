import cardModel from "../models/cardModel.js";

class CardController {
  // GET /cartas
  async getAllCards(req, res) {
    const pagina = req.query.page || 1; 
    console.log("Página:", pagina);

    const limite = req.query.limit;
    console.log("Limite:", limite);
    try {
      const cartas = await cardModel.findAll();
      res.json(cartas);
    } catch (error) {
      console.error("Erro ao buscar as cartas:", error);
      res.status(500).json({ error: "Erro ao buscar as cartas" });
    }
  }

  // GET /cartas/:id
  async getCardById(req, res) {
    try {
      const { id } = req.params;

      const carta = await cardModel.findById(id);

      if (!carta) {
        return res.status(404).json({ error: "carta não encontrada" });
      }

      res.json(carta);
    } catch (error) {
      console.error("Erro ao buscar carta:", error);
      res.status(500).json({ error: "Erro ao buscar carta" });
    }
  }

  // POST /cartas
  async createCard(req, res) {
    try {
      // Validação básica
      const {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId,
      } = req.body;

      // Verifica se todos os campos da carta foram fornecidos
      if (!name || !rarity || !attackPoints || !defensePoints || !collectionId) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar nova Carta
      const newCard = await cardModel.create(
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId
      );

      if (!newCard) {
        return res.status(400).json({ error: "Erro ao criar Carta" });
      }

      res.status(201).json({
        message: "carta criada com sucesso",
        newCard
      });
    } catch (error) {
      console.error("Erro ao criar carta:", error);
      res.status(500).json({ error: "Erro ao criar carta" });
    }
  }

  // PUT /cartas/:id
  async updateCard(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId
      } = req.body;

      // Atualizar o carta
      const updatedCard = await cardModel.update(
        id,
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId
      );

      if (!updatedCard) {
        return res.status(404).json({ error: "carta não encontrada" });
      }

      res.json(updatedCard);
    } catch (error) {
      console.error("Erro ao atualizar carta:", error);
      res.status(500).json({ error: "Erro ao atualizar carta" });
    }
  }

  // DELETE /carta/:id
  async deleteCard(req, res) {
    try {
      const { id } = req.params;

      // Remover o carta
      const result = await cardModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "carta não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover carta:", error);
      res.status(500).json({ error: "Erro ao remover carta" });
    }
  }
}

export default new CardController();
