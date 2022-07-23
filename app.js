const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, "frontend", "build")))

app.get("/names", (req, res) => {
  res.send("Telmo")
})

app.listen(3000, () => {
  console.log("server listening on port 3000")
})
