const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const instanceName = process.env.INSTANCE_NAME || "unknown";

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} from ${
      req.ip
    } -> handled by ${instanceName}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send(`Hello from ${instanceName}`);
});

app.get("/healthz", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server running on port ${port} - ${instanceName}`);
});
