
const express = require("express");
const router = express.Router();

const compromissosController = require("../controllers/compromissos.controller");

router.post("/", compromissosController.criar);

router.get("/", compromissosController.listar);

router.get("/:id", compromissosController.buscarPorId);

router.put("/:id", compromissosController.atualizar);

router.delete("/:id", compromissosController.excluir);

module.exports = router;
