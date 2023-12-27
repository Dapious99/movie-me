import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "./components/Fallback";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
