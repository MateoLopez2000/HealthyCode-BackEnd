const express = require("express");
const router = express.Router();
const PersonCtrl = require("../Controllers/person.controller");
const app = express();

router.get("/user", PersonCtrl.getList);
router.post("/user", PersonCtrl.savePerson);
router.post("/signin", PersonCtrl.signin);

module.exports = router;
