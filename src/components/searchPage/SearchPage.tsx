import React from "react";
import { useSearchParams } from "react-router-dom";
import "./searchPage.css";
import SearchItem from "../searchItem/SearchItem";
import { useAppSelector } from "../../hooks/hookType";
import { uid } from "uid";

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
              text={true}
              id={item.id}
              good={{ ...item, deleteId: uid() }}
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
              text={false}
              key={item.id}
              good={{ ...item, deleteId: uid() }}
              id={item.id}
            />
          ) : null;
        });
    }
  };

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
