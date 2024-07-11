const {people} = require('../data');

const addPerson = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide a name" });
    }
    people.push({id: people.length +1, name:name });
    res.status(201).json({ success:true, person: name});
    console.log("After: ", people);
} 

const updatePerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(400).json({ success: false, msg: `User with id ${id} was not found` });
    }

    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide a name" });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople});
} 

const deletePerson = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
        return res.status(400).json({ success: false, msg: `User with id ${id} was not found` });
    }
    console.log(person.id);
    //proposed solution from the task description 
    // const newPeopleProposed = people.filter((person) => person.id != id);
    // res.status(200).json({ success: true, msg: `User with id ${id} has been successfully removed`, data: newPeopleProposed});
    //my option since we need to delete it and not to filter out
    people.map((person) => {
        if (person.id === Number(id)) {
            people.splice(person.id-1, 1);
        }
    })
    res.status(200).json({ success: true, msg: `User with id ${id} has been successfully removed`, data: people});

} 

const getPerson = (req, res) => {
    const {id} = req.params;
    console.log(id);
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `User with id ${id} was not found` });
    }

    res.status(201).json({ success:true, person: person});
    // console.log("After: ", people);
}

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}



module.exports = {addPerson, getPerson, updatePerson, deletePerson, getPeople};