
const express = require("express");
const router = express.Router();

const tarefasController = require("../controllers/tarefas.controller");

router.post("/", tarefasController.criar);
router.get("/", tarefasController.listar);
router.get("/:id", tarefasController.buscarPorId);
router.put("/:id", tarefasController.atualizar);
router.delete("/:id", tarefasController.excluir);

module.exports = router;
