const express = require("express");
const app = express();

let panel = "close";

app.get("/", (req, res) => {
res.send(`
<body style="background:black;color:white;text-align:center;padding-top:100px;">
<h1>STACY PILOT PANEL</h1>

<button onclick="fetch('/open')" style="font-size:40px;">
OPEN
</button>

<br><br>

<button onclick="fetch('/close')" style="font-size:40px;">
CLOSE
</button>

</body>
`);
});

app.get("/open", (req, res) => {
panel = "open";
res.send("opened");
});

app.get("/close", (req, res) => {
panel = "close";
res.send("closed");
});

app.get("/panel", (req, res) => {
res.send(panel);
});

app.listen(process.env.PORT || 3000);
