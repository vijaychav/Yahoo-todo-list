var mongoose = require('mongoose');
var Todo = mongoose.model('todo');
var router = require('express').Router();
var path = require('path');

//initial front page. Angular will take care of the rendering part
router.get('', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


//list of all todos
router.get('/listoftodos', function(req, res) {
    Todo.find(function(err, listoftodos) {

        if (err)
            res.send("Error in retrieving todo list from dB " + err);
        else
            res.json(listoftodos);
        console.log(listoftodos);
    });
});

//adding a todo. Since the front end is a Angular JS controller
//I add a todo to the existing db and then send the whole list to the controller
router.post('/addtodo', function(req, res) {
    Todo.create({
        text: req.body.text,
        updatedtime: Date.now()
    }, function(err, todo) {
        if (err)
            res.send("Error in creating the todo " + err);

        Todo.find(function(err, listoftodos) {

            if (err)
                res.send("Error in retrieving todo list from dB " + err);
            else
                res.json(listoftodos);
        });
    });
});

//removing a todo
//mongoose automatically creates an id once it a new element is created
router.delete('/deletetodo/:todo_id', function(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send("Error in deleting the todo " + err);


        Todo.find(function(err, listoftodos) {

            if (err)
                res.send("Error in retrieving todo list from dB " + err);
            else
                res.json(listoftodos);
        });
    });

});

//resetting the list
router.post('/reset', function(req, res) {
    Todo.remove({}, function(err, todo) {
        if (err)
            res.send("Error in deleting all elements in todo " + err);


        Todo.find(function(err, listoftodos) {

            if (err)
                res.send("Error in retrieving todo list from dB " + err);
            else
                res.json(listoftodos);
        });
    });

});



module.exports = router;