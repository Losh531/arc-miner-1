const puppeteer = require("puppeteer");

(async () => {
  var i;
  while (i < 50) {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newpage();
    await page.goto("https://arcio-server.losh531.repl.co");

    await console.log("at website");
    i++;
  }
  //
  //const express = require("express");
  //const app = express();

  // make all the files in 'public' available
  // https://expressjs.com/en/starter/static-files.html
  //app.use(express.static("public"));

  // https://expressjs.com/en/starter/basic-routing.html
  //app.get("/", (request, response) => {
  // response.sendStatus(200);
  //});
  //const listener = app.listen(3000, () => {
  //console.log("your app is listening on port " + listener.address().port);
  //});
  //await browser.close();
})();
