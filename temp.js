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
app.get('', (_, resp) =>{
  resp.sendFile('/Users/marioquiterio/SIEMPROJECT/templates/index.html')
});
app.get('/maliciousIp', (_, resp) =>{
  resp.sendFile('/Users/marioquiterio/SIEMPROJECT/templates/maliciousIp.html')
});

app.use(cors());

app.listen(8080)