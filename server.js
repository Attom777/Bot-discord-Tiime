const express = require('express');
const app = express();


app.get("/", (request, response) => {
  response.send('Tiime is alive!')
});

function keepAlive(){
  app.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;
