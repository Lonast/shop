import { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getGoodsThunk } from "../../features/goods/goodsSlice";
import { useAppDispathc, useAppSelector } from "../../hooks/hookType";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import "./homePage.css";
import back from "../../backgrounds/background1.jpg";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "white",
  height: "400px",
};
const backgrounds = [
  require("../../backgrounds/background1.jpg"),
  require("../../backgrounds/background2.jpg"),
  require("../../backgrounds/background3.jpg"),
  require("../../backgrounds/background4.jpg"),
  require("../../backgrounds/background5.jpg"),
  require("../../backgrounds/background6.jpg"),
  require("../../backgrounds/background7.jpg"),
];

const HomePage: React.FC = () => {
  const dispatch = useAppDispathc();
  const selector = useAppSelector((state) => state.goods);
  const slideImages = selector.goods;
  const index = Math.floor(Math.random() * (selector.goods.length - 9));

  useEffect(() => {
    dispatch(getGoodsThunk());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="container__items">
        {selector.status === "pending" ? (
          <Loader />
        ) : (
          <>
            <div className="gradient"></div>
            <img
              className=" background"
              src={backgrounds[Math.floor(Math.random() * backgrounds.length)]}
              alt=""
            />
            <div className="slider">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.image})`,
                      }}
                    ></div>
                  </div>
                ))}
              </Slide>
            </div>
            <div className="card__container">
              {selector.goods.slice(index, index + 9).map((item) => {
                return (
                  <Card
                    key={item.id}
                    title={item.title}
                    img={item.image}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
