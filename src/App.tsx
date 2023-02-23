import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import Liked from "./components/liked/Liked";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="likes" element={<Liked />} />
      </Route>
    </Routes>
  );
}

export default App;
