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


router.post("/", (req, res) => {
  const charData = req.body;

  Characters.add(charData)
      .then(created => {
          res.status(201).json({ created })
      })
      .catch(err => {
          res.status(500).json({ message: "Somthing wend wrong" });
      });
})


router.delete("/:id", (req, res) => {
  const { id } = req.params

  Characters.remove(id)
      .then(deleted => {
          if(deleted){
              res.status(204).json({ message: 'Character removed'}).end()
          } else {
              res.status(404).json({ message: 'No id match'})
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Something went wrong" });
      });
})

module.exports = router
