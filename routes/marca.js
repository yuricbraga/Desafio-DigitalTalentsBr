const express = require("express");
const Marca = require("../db/models").Marca;

const router = express.Router();

/**
 * Test route
 */
router.get("/", (req, res) => {
  res.status(200).send({ msg: "Marca route works!" });
});

/**
 * Get all Marca
 */
router.get("/list", (req, res) => {
  Marca.findAll()
    .then(marca => {
      res.status(200).send(marca);
    })
    .catch(err => {
      res.status(400).send({ error: { exception: "Erro inesperado" } });
    });
});

/**
 * Register a marca
 */
router.post("/add", (req, res) => {
  Marca.create({ nome: req.body.nome }).then(marca => {
    res.status(200).send(marca);
  });
});

module.exports = router;
