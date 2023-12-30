import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "./components/Fallback";
import Layout from "./components/shared/Layout";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
