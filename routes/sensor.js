const express = require("express");
const Sensor = require("../db/models").Sensor;
const Medida = require("../db/models").Medida;
const Tamanho = require("../db/models").Tamanho;
const Localizacao = require("../db/models").Localizacao;

const router = express.Router();

/**
 * Test route
 */
router.get("/", (req, res) => {
  return res.status(200).send({ msg: "Sensor route works!" });
});

/**
 * Return all sensors
 */
router.get("/list", (req, res) => {
  Sensor.findAll({
    include: [Tamanho, Localizacao, Medida]
  })
    .then(sensor => {
      if (sensor.length === 0)
        return res.status(404).send({ msg: "Nenhum sensor cadastrado" });

      return res.status(200).send({ success: true, sensor });
    })
    .catch(err => {
      return res.status(400).send({ erro: "Erro inesperado" });
    });
});

/**
 * Add a new sensor
 */
router.post("/add", (req, res) => {
  let tamanhoFields = {
    altura: req.body.altura,
    largura: req.body.largura,
    comprimento: req.body.comprimento,
    sensor_id: 0
  };

  let localizacaoFields = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    sensor_id: 0
  };

  let sensorFields = {
    codename: req.body.codename,
    tensao_id: req.body.tensao_id,
    marca_id: req.body.marca_id,
    tipo_id: req.body.tipo_id
  };

  Sensor.create(sensorFields).then(async sensor => {
    let response = { ...sensor.dataValues };
    tamanhoFields.sensor_id = sensor.id;
    localizacaoFields.sensor_id = sensor.id;

    response.tamanho = await Tamanho.create(tamanhoFields);
    response.localizacao = await Localizacao.create(localizacaoFields);

    return res.status(200).send({ success: true, response });
  });
});

/**
 * Edit a sensor
 */
router.put("/edit/:id", (req, res) => {
  let tamanhoFields = {
    altura: req.body.altura,
    largura: req.body.largura,
    comprimento: req.body.comprimento
  };

  let localizacaoFields = {
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  let sensorFields = {
    codename: req.body.codename,
    tensao_id: req.body.tensao_id,
    marca_id: req.body.marca_id,
    tipo_id: req.body.tipo_id
  };

  Sensor.update(sensorFields, {
    where: {
      id: req.params.id
    }
  }).then(updatedRowsSen => {
    Tamanho.update(tamanhoFields, {
      where: { sensor_id: req.params.id }
    }).then(updatedRowsTam => {
      Localizacao.update(localizacaoFields, {
        where: {
          sensor_id: req.params.id
        }
      }).then(updatedRownsLoc => {
        return res.status(200).send({ success: true });
      });
    });
  });
});

/**
 * Delete a sensor
 */
router.delete("/remove/:id", (req, res) => {
  Sensor.count().then(number => {
    if (number === 1) {
      return res.status(400).send({
        error: { onlyOne: "É necessário que exista pelo menos um sensor" }
      });
    }

    Sensor.destroy({
      where: {
        id: req.params.id
      }
    }).then(removed => {
      if (removed < 1)
        return res
          .status(404)
          .send({ error: { notFound: "Nenhum sensor encontrado" } });

      return res.status(200).send({ success: true });
    });
  });
});

module.exports = router;
