import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
