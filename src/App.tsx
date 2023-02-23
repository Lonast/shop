import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
