const express = require("express");
const router = express.Router();
const { addPerson, getPerson, updatePerson, deletePerson, getPeople } = require("../controllers/people.js");


router.get("/", getPeople);
//Add a router.get statement to routes/people.js. This is to get a particular entry from the people array.
router.get("/:id", getPerson);

//js post
router.post("/", addPerson);
//put
router.put("/:id", updatePerson);
//delete
router.delete("/:id", deletePerson);

module.exports = router;