const express = require("express");
const Characters = require("./characters-model");
const router = express.Router();

router.get("/", (req, res) => {
  Characters.getCharacters()
    .then((chars) => {
      res.status(200).json(chars);
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router
