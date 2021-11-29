var express = require('express');
var app = express();
const port = process.env.PORT || 8000;

console.log("ROUTES")


app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});