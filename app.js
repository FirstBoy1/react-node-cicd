const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/names", (req, res) => {
  res.send("Telmo")
})

app.listen(3000, () => {
  console.log("server listening on port 3000")
})
