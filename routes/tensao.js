const express = require("express");
const Tensao = require("../db/models").Tensao;

const router = express.Router();

/**
 * Test route
 */
router.get("/", (req, res) => {
  res.status(200).send({ msg: "Tensao route works!" });
});

/**
 * Get all tensao
 */
router.get("/list", (req, res) => {
  Tensao.findAll()
    .then(tensao => {
      res.status(200).send(tensao);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ error: { exception: "Erro inesperado" } });
    });
});

/**
 * Register a new tensao
 */
router.post("/add", (req, res) => {
  Tensao.create({ valor: req.body.valor }).then(tensao => {
    return res.status(200).send(tensao);
  });
});

module.exports = router;
