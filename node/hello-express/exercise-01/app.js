const express = require('express');
const app = express();

// send a response
app.get('/', (req, res) => res.send("Hello World"));

// print to the terminal
app.listen(3000, () => console.log("Example app listening on port 3000"));