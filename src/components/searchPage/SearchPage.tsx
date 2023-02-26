import React from "react";
import { useSearchParams } from "react-router-dom";
import "./searchPage.css";
import SearchItem from "./searchItem/SearchItem";
import { useAppSelector } from "../../hooks/hookType";

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useSearchParams();
  const category = searchValue.get("category") || "";
  const search = searchValue.get("search") || "";
  const selector = useAppSelector((state) => state.goods);

  const categoryCheck = () => {
    if (category === "all") {
      return selector.newGoods
        .filter((item) => {
          return item.title
            .toLocaleLowerCase()
            .split(" ")
            .join("")
            .includes(search.toLocaleLowerCase().split(" ").join(""));
        })
        .map((item) => {
          return (
            <SearchItem
              key={item.id}
              category={item.category.name}
              id={item.id}
              img={item.category.image}
              title={item.title}
              description={item.description}
              liked={item.liked}
              price={item.price}
            />
          );
        });
    } else {
      return selector.newGoods
        .filter((item) => {
          return item.title
            .toLocaleLowerCase()
            .split(" ")
            .join("")
            .includes(search.toLocaleLowerCase().split(" ").join(""));
        })
        .map((item) => {
          return item.category.name.toLocaleLowerCase() === category ? (
            <SearchItem
              category={item.category.name}
              key={item.id}
              id={item.id}
              img={item.category.image}
              title={item.title}
              description={item.description}
              liked={item.liked}
              price={item.price}
            />
          ) : null;
        });
    }
  };
  console.log(selector);

  const items = categoryCheck();

  return (
    <div className="search">
      <h2 className="search__header">{search}</h2>
      <h3 className="search__category">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <hr />
      {items.length > 0 ? (
        items
      ) : (
        <p className="nothing">Nothing found for your request</p>
      )}
    </div>
  );
};

export default SearchPage;
