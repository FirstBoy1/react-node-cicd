import axios from "axios"
import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [names, setNames] = useState("")

  useEffect(() => {
    getNames()
  }, [])

  async function getNames() {
    const response = await axios.get("http://localhost:3000/names")
    setNames(response.data)
  }

  return (
    <>
      <h1>My website</h1>
      <h3>{names}</h3>
    </>
  )
}

export default App
