const sharp = require("sharp");

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", async function (req, res) {
  const md = await getMetadata()
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(md));
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

async function getMetadata() {
  try {
    const metadata = await sharp("sammy.png").metadata();
    console.log(metadata);
    return metadata
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}