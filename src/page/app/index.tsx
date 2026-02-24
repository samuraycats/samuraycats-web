import { Typography } from "@mui/material"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>


      <Route path="/bots"
        element={

          <h1>Bot</h1>
        }
      />
      <Route
        path="/web"
        element={<h1>Web</h1>
        }
      />

      <Route
        path="/movil"
        element={<h1>Movil</h1>
        }
      />

            <Route path="/*"
        element={
          <h1>Productos</h1>
        }
      />

    </Routes>
  )
}

export default App