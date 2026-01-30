const express = require('express');
const router = express.Router();

let tasks= [];
let currentId= 1;

router.get('/',(req, res ) =>{
    res.json(tasks);
});

router.post('/', (req, res) => {

    const newTask= {
    id: currentId++, 
    title: req.body.title,
    description: req.body.description,
    completed: false,
    createdAt: new Date(),
    priority: req.body.priority,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});  

router.put('/:id', (req, res) => {

    const taskId= parseInt(req.params.id);
    const index= tasks.findIndex(t => t.id === taskId);
    const existing= tasks[index];

    const updated = {
        id: existing.id,
        title:req.body.title,
        description:req.body.description,
        completed:req.body.completed,
        createdAt:existing.createdAt,
        priority:req.body.priority,
    }
    tasks[index]= updated;
    res.status(200).json(updated);
});

router.delete('/:id', (req, res) => {
    
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).end();
});

router.patch('/:id/toggle', (req, res) => {

    const taskId= parseInt(req.params.id);
    const index= tasks.findIndex(t => t.id === taskId);
    tasks[index].completed= !tasks[index].completed;
    res.status(200).json(tasks[index]);
});

module.exports = router;