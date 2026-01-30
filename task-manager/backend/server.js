const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/tasks');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});