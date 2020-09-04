const docs = require('./src/MongoDb/connection').getDocuments;
let express = require('express');
let app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/words', async function (req, res) {
  const prom = await docs();
  res.send(prom);
})

app.listen(8080, () => { console.log("Listening to port 8080") });