const express = require('express');
const app = express();

const port = 3000;

const data = [
     {"id":"1","name":"make emacs work"}
];

app.get('/todos' ,(_,res) => {
     res.send(data);
})

app.listen(port,()=>{
    console.log(`App listening to port ${port}`);
})
