// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send(200);
});

const puppeteer = require('puppeteer');
process.setMaxListeners(Infinity);
(async () => {
  let i = 0;
while (i < 6) { 
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });;
  const page = await browser.newPage();
  await page.goto('https://arcio-server.losh531.repl.co');
  await console.log("At Website")
  i++;
}


  //await browser.close();
})();

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

