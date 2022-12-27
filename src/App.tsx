import { Button } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import Chat from "./pages/chat"
import Home from "./pages/home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
