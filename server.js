var express = require("express");
var app = express();
app.use(express.static("./dist/africaparis-front"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/africaparis-front/" });
});

const port = process.env.PORT || 8090;
app.listen(port, function () {
  console.log("http://localhost: " + port);
});
