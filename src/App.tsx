import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import Liked from "./components/liked/Liked";
import SearchPage from "./components/searchPage/SearchPage";
import Cart from "./components/cart/Cart";
import SinglePage from "./components/singleGood/SinglePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="likes" element={<Liked />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search/item/:id" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}

export default App;
