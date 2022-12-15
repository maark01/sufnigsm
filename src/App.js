import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Calculation from "./pages/Calculation"
import PageNotFound from "./pages/PageNotFound"
import "./App.css"
import { ChosenItemContext, ChosenItemContextDefaults } from "./contexts/ChosenItemContext"
import { useState } from "react";

function App() {

  const [activeItem, setActiveItem] = useState(ChosenItemContextDefaults.value)

  const pages = [
    { name: "Home", path: "/", menubar: true, element: <Home />, icon: "home" },
    { name: "Products", path: "/products", menubar: true, element: <Products />, icon: "mobile-alt" },
    { name: "Calculation", path: "/calculation", menubar: true, element: <Calculation />, icon: "calculator" },
    { name: "NotFound", path: "*", menubar: false, element: <PageNotFound />, icon: null }
  ]



  return (
    <div className="App">
      <ChosenItemContext.Provider value={{activeItem, setActiveItem}}>
        <Router>
          <Header menu={pages} />
          <Content routes={pages} />
          <Footer/>
        </Router>
      </ChosenItemContext.Provider>
    </div>
  );
}

export default App;
