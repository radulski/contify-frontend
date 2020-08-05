const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/contify-ui'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/contify-ui/index.html');
});

// app.listen(4200);
app.listen(process.env.PORT || 4200);
