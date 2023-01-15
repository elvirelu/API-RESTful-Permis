const express = require("express");
const ControleurPermis = require("../../controleurs/ControleurPermis");
const ControleurMembres = require("../../controleurs/ControleurMembres");

const router = express.Router();

router.get("/permis", ControleurPermis.getAllPermis);
router.post("/permis", ControleurPermis.creerPermis);
router.put("/permis:id",ControleurPermis.modifierPermis);
router.delete("/permis:id", ControleurPermis.supprimerPermis);

router.get("/membre", ControleurMembres.getCle);
router.post("/membre", ControleurMembres.creerMembre);

module.exports = router;