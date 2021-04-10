const express = require("express");
const app = express();
var cors = require("cors");
const PORT = 3000;

const adminRoute = require("./routes/admin");
const employeeRoute = require("./routes/employee");

app.use(cors());
app.use(express.json());
app.use("/admin", adminRoute);
app.use("/employee", employeeRoute);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
