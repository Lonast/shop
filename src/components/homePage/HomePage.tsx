import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getGoodsThunkNew } from "../../features/goods/goodsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hookType";
import Card from "../card/Card";
import ErrorPage from "../errorPage/ErrorPage";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import "./homePage.css";

interface Index {
  first: number;
  second: number;
}

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
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
const random = Math.floor(Math.random() * backgrounds.length);

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.goods);
  const slideImages = selector.newGoods;
  const [serverResp, setServerResp] = useState<boolean>(false);
  const index = Math.floor(Math.random() * (selector.newGoods.length - 9));
  const [memIndex, setMemIndex] = useState<Index>({ first: 1, second: 1 });

  useEffect(() => {
    if (selector.newGoods.length === 0) {
      dispatch(getGoodsThunkNew());
    }
  }, [dispatch]);
  useEffect(() => {
    if (selector.newGoods.length === 0 && selector.status === "fulfilled") {
      setServerResp(true);
    }
    setMemIndex({ first: index, second: index + 9 });
  }, [selector.status]);

  return (
    <>
      {serverResp ? (
        <ErrorPage />
      ) : (
        <div className="container">
          <div className="container__items">
            {selector.status === "pending" ? (
              <Loader />
            ) : (
              <>
                <div className="gradient"></div>
                <img className="background" src={backgrounds[random]} alt="" />
                <div className="slider">
                  <Slide>
                    {slideImages.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage.category.image})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
                <h1 className="container__header">Recommendations</h1>
                <div className="card__container">
                  {selector.newGoods
                    .slice(memIndex.first, memIndex.second)
                    .map((item) => {
                      return (
                        <Card
                          key={item.id}
                          liked={item.liked}
                          id={item.id}
                          title={item.title}
                          img={item.category.image}
                          rating={item.rating}
                        />
                      );
                    })}
                </div>
              </>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
