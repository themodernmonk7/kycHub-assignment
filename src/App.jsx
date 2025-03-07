import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router"
import { Toaster } from "react-hot-toast"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { Home, CompareProducts } from "./pages"
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Navbar />
        <div className="flex ml-48">
          <Sidebar />
          <div className="mx-auto p-5 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compare-products" element={<CompareProducts />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
