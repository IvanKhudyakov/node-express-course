const express = require("express");
const router = express.Router();
const { addPerson, getPerson, updatePerson, deletePerson, getPeople } = require("../controllers/people.js");


router.get("/", (req, res) => {
    getPeople(req, res);
})
//Add a router.get statement to routes/people.js. This is to get a particular entry from the people array.
router.get("/:id", (req, res) => {
    getPerson(req, res, req.params.id);  
})

//js post
router.post("/", (req, res) => {
    addPerson(req, res);
})
//put
router.put("/:id", (req, res) => {
    updatePerson(req, res, req.params.id);
})

//delete
router.delete("/:id", (req, res) => {
    deletePerson(req,res,req.params.id);
})

module.exports = router;