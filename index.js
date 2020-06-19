const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.get('/', function(req, res) {
    console.log('hit /')
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
app.listen(process.env.PORT || 9000);

console.log('app started on port ' + process.env.PORT)
