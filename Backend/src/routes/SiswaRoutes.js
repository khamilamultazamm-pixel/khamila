const express = require("express");

const router = express.Router();

const controller = require("../controller/SiswaController");

router.get("/", controller.getSiswa);
router.get("/:kode", controller.getSiswaByKode);
router.post("/", controller.createSiswa);
router.put("/:kode", controller.updateSiswa);
router.delete("/:kode", controller.deleteSiswa);

module.exports = router;