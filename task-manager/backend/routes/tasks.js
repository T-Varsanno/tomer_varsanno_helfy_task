const express = require('express');
const router = express.Router();

let tasks= [];
let currentId= 1;


function prioValid(p){
    return p==='low' || p==='medium' || p==='high';
}
function stringValid(s){
    return typeof s === 'string' && s.length > 0;
}

router.get('/',(req, res ) =>{
    res.status(200).json(tasks);
});

router.post('/', (req, res) => {
    const title= req.body.title;
    const description= req.body.description;
    const priority= req.body.priority;

    if(!stringValid(title) || !stringValid(description) || !prioValid(priority)){
        return res.status(400).json({error: 'Invalid strings in data'});
    }
    const newTask= {
    id: currentId++, 
    title: title,
    description: description,
    completed: false,
    createdAt: new Date(),
    priority: priority,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});  

router.put('/:id', (req, res) => {

    const taskId= parseInt(req.params.id);
    const index= tasks.findIndex(t => t.id === taskId);
    const existing= tasks[index];

    const title= req.body.title;
    const description= req.body.description;
    const priority= req.body.priority;
    if(!stringValid(title) || !stringValid(description) || !prioValid(priority)){
        return  res.status(400).json({error: 'Invalid strings in data'});
    }

    const updated = {
        id: existing.id,
        title:title,
        description:description,
        completed:req.body.completed,
        createdAt:existing.createdAt,
        priority:priority,
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