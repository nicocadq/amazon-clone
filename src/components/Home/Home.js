import React from "react";

import Product from "./../Product";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        alt="Banner"
      />

      <div className="home__row">
        <Product
          id={"21312311231233"}
          title={"Title of  product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
        <Product
          id={"2131qweqweqw23123"}
          title={"Title of the product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={"2131sadasd23123"}
          title={"Title of tgdjhghe product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
        <Product
          id={"213asdasd123123"}
          title={"Title of tsdhahhe product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
        <Product
          id={"213asdasdas123123"}
          title={"Title of the product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={"21312aaaaaaa3123"}
          title={"Title of the product"}
          price={32.5}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
