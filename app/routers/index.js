const express = require("express");
const router = express.Router();

const _personaController=require("../controllers/personas.controller");

router
.get("/persona", _personaController.getPersona)
.get("/personas", _personaController.getPersonas)
.post("/persona",_personaController.crearPersona);


module.exports=router;
