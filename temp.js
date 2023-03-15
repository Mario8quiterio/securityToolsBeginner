const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/templates/css'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.get('/home', (_, resp) =>{
  resp.sendFile(__dirname + '/templates/index.html')
});
app.get('/maliciousIp', (_, resp) =>{
  resp.sendFile(__dirname + '/templates/maliciousIp.html')
});
app.get('/apiKey', (_, resp) =>{
  resp.sendFile(__dirname + '/templates/apiKey.html')
});

app.use(cors());

app.listen(8080, "0.0.0.0")
