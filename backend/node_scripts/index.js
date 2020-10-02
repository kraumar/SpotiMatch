const path = require("path");
const { spawn } = require("child_process");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function runScript(j1, j2) {
  return spawn("python", [
    "-u",
    path.join(__dirname, "..", "python_scripts", "compare.py"),
    JSON.stringify(j1),
    JSON.stringify(j2)
  ]);
}

// const subprocess = runScript();

// // print output of script
// subprocess.stdout.on("data", (data) => {
//   console.log(`data: ${data}`);
// });
// subprocess.stderr.on("data", (data) => {
//   console.log(`error:${data}`);
// });
// subprocess.on("close", () => {
//   console.log("Closed");
// });

app.post("/run", (req, res) => {
  const {
    json1: {
      data: { items: j1 }
    }
  } = req.body.data;

  const {
    json2: {
      data: { items: j2 }
    }
  } = req.body.data;

  const subprocess = runScript(j1, j2);
  res.set("Content-Type", "text/plain");
  subprocess.stdout.pipe(res);
  subprocess.stderr.pipe(res);
});

app.listen(8888, () => console.log("Server running"));
