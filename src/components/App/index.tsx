import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "pages/Main"
import Contact from "pages/Contact"

import "./styles.scss"

const App: FC = () => (
  <Routes>
    <Route
      path="*"
      element={<Main />}
    />
    <Route
      path="/:id"
      element={<Main />}
    />
    <Route
      path="/contacts"
      element={<Contact />}
    />
  </Routes>
)

export default App
