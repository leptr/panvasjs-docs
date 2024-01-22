import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Docs from "./Docs";
import GetStarted from "./GetStarted";
import Examples from "./Examples";

const Pages = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
      <Route path="/get-started" element={<GetStarted />}></Route>
      <Route path="/examples" element={<Examples />}></Route>
    </Routes>
  );
};

export default Pages;
