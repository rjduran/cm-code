const express = require('express');
const app = express();

// send a response
app.get('/', (req, res) => res.send("Hello World"));
//app.get('/yay', (req, res) => res.send("yay"));

// functionally equivalent to 'arrow function' used above
// app.get('/', function (req, res) {
//   res.send("Hello World")
// });

// print to the terminal
app.listen(3001, () => console.log("Example app listening on port 3000"));