const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello World!')
  console.log("okay")
});


  
app.get('/uki', function(req, res) {
    res.send('Hello Uki!')
   console.log("done")
  });

  app.listen(port,function(){
    console.log(`Example app listening on port ${port}!`)
  })