var express = require('express');
var app = express();
app.use(express.static("./dist/africaparis-front"));
app.get("/", function(req, res) {
  res.sendFile("index.html", {root: "dist/africaparis-front/"}
);
});

app.listen(process.env.PORT || 8080, function () {
	console.log("http://localhost:8080");
});
