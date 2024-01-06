import React, { useState } from "react";
import styles from "../Css/home.module.css";
import product_1 from "../Assets/new-collection-product-1.jpg";
import product_2 from "../Assets/new-collection-product-2.jpg";
import product_3 from "../Assets/new-collection-product-3.jpg";
import product_4 from "../Assets/new-collection-product-4.jpg";
import Collectioncard from "../Components/Collectioncard";
import collection_1 from "../Assets/collection-1.jpg";
import collection_2 from "../Assets/collection-2.jpg";
import collection_3 from "../Assets/collection-3.jpg";
import collection_4 from "../Assets/collection-4.jpg";
import collection_5 from "../Assets/collection-5.jpg";
import collection_6 from "../Assets/collection-6.jpg";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import BestSellerCard from "../Components/BestSellerCard";
import best_seller_1 from "../Assets/bestSeller-1.jpg";
import best_seller_2 from "../Assets/bestSeller-2.jpg";
import best_seller_3 from "../Assets/bestSeller-3.jpg";
import best_seller_4 from "../Assets/bestSeller-4.jpg";
import about from "../Assets/about.jpg";

function Home() {
  const [count, setCount] = useState(3);

  const handelCount = (val) => {
    setCount(val);
  };

  console.log(count);
  return (
    <>
      <HeroSection />
      {/* hero part complete */}
      <div className={styles.new_collections}>
        <div className={styles.new_collections_heading}>
          <div>
            <h2 className={styles.common_heading_h2}>New Collections</h2>
            <p className={styles.new_collections_heading_p}>
              Check Out the New Collections of Famous Brands
            </p>
          </div>
          <div className={styles.new_collections_heading_right}>
            <p className={styles.new_collections_heading_right_p}>
              <Link to="/ProductList" className={styles.common_anchor}>
                {" "}
                ALL COLLLECTIONS
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.new_collection_products}>
          <Collectioncard
            image={product_1}
            title={"Messika"}
            desc={"Move Uno Collection"}
          />
          <Collectioncard
            image={product_2}
            title={"Cartier"}
            desc={"Love Collection"}
          />
          <Collectioncard
            image={product_3}
            title={"Garrard"}
            desc={"1735 Colection"}
          />
          <Collectioncard
            image={product_4}
            title={"Messika"}
            desc={"Lucky move collection"}
          />
        </div>
      </div>

      {/* New Collection Done */}

      <div className={styles.categories}>
        <div className={styles.categories_left}>
          <div className={styles.categories_heading}>
            <h2 className={styles.common_heading_h2}>Categories</h2>
            <p>Discover Our collection of Jewelry by categories</p>
          </div>
          <div className={styles.categories_items}>
            <h4
              onClick={() => {
                handelCount(1);
              }}
              className={styles.categories_items_h4}
            >
              Rings
            </h4>
            <h4
              onClick={() => {
                handelCount(2);
              }}
              className={styles.categories_items_h4}
            >
              Bracelets
            </h4>
            <h4
              onClick={() => {
                handelCount(3);
              }}
              className={styles.categories_items_h4}
            >
              Earrings
            </h4>
            <h4
              onClick={() => {
                handelCount(4);
              }}
              className={styles.categories_items_h4}
            >
              Neckless & Pendants
            </h4>
            <h4
              onClick={() => {
                handelCount(5);
              }}
              className={styles.categories_items_h4}
            >
              Watches
            </h4>
            <h4
              onClick={() => {
                handelCount(6);
              }}
              className={styles.categories_items_h4}
            >
              Men's Jewelry
            </h4>
          </div>
          <div className={styles.categories_end}>
            <p>
              <Link to="/ProductList" className={styles.common_anchor}>
                {" "}
                ALL COLLLECTIONS
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.categories_right}>
          {count == 1 ? (
            <img src={collection_1} className={styles.categories_right_img} />
          ) : count == 2 ? (
            <img src={collection_2} className={styles.categories_right_img} />
          ) : count == 3 ? (
            <img src={collection_3} className={styles.categories_right_img} />
          ) : count == 4 ? (
            <img src={collection_4} className={styles.categories_right_img} />
          ) : count == 5 ? (
            <img src={collection_5} className={styles.categories_right_img} />
          ) : (
            <img src={collection_6} className={styles.categories_right_img} />
          )}
        </div>
      </div>

      {/* Categories done */}

      <div className={styles.best_seller}>
        <div className={styles.best_seller_heading}>
          <div>
            <h2 className={styles.common_heading_h2}>Bessellers</h2>
            <p>Check Out the New Collections of Famous Brands</p>
          </div>
          <div className={styles.best_seller_heading_right}>
            <p>
              <Link to="/ProductList" className={styles.common_anchor}>
                VIEW ALL
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.best_seller_products}>
          <BestSellerCard
            image={best_seller_1}
            title={"Messika"}
            desc={"White Gold Diamond Ring"}
            price={"1.390"}
          />
          <BestSellerCard
            image={best_seller_2}
            title={"Tiffani"}
            desc={"Silver Necklace"}
            price={"750"}
          />
          <BestSellerCard
            image={best_seller_3}
            title={"Bulgari"}
            desc={"White Gold Diamond Earrings"}
            price={"7.250"}
          />
          <BestSellerCard
            image={best_seller_4}
            title={"Cartier"}
            desc={"White Gold Ring"}
            price={"1.950"}
          />
        </div>
      </div>

      {/* Best Seller Done */}

      <div className={styles.gift}>
        <div className={styles.gift_text}>
          <h2 className={styles.gift_text_h2}>Gifts</h2>
          <p className={styles.gift_text_p}>Looking for the prefect gift?</p>
          <p className={styles.gift_text_p}>
            Look no further! Our extensive collection of jewelry gifts
          </p>
          <p className={styles.gift_text_p}>
            includes something for everyone - from elegent and timeless
          </p>
          <p className={styles.gift_text_p}>
            prices for her to bold and sophisticated desings for him
          </p>
          <div className={styles.gift_text_end}>
            <p>SHOP GIFTS</p>
          </div>
        </div>
      </div>

      {/* gift done  */}

      <div className={styles.about}>
        <div className={styles.about_left}>
          <div className={styles.about_heading}>
            <h2 className={styles.about_heading_h2}>About</h2>
            <p className={styles.about_heaing_p}>
              Gem Garden is More Then Just Gilding
            </p>
          </div>
          <div className={styles.about_text}>
            <p className={styles.about_text_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              harum architecto <br /> tempora temporibus vitae unde rerum
              repellendus similique commodi, quam, <br />
              aliquam inventore quasi cumque ,Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <br />
              Officia fuga voluptatum omnis in, eveniet illum?
            </p>

            <p className={styles.about_text_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              harum architecto similique <br />
              commodi, quam,aliquam inventore quasi cumque sit amet consectetur
              adipisicing elit. <br />
              Officia fuga voluptatum omnis in, eveniet illum?
            </p>
          </div>
          <div className={styles.about_end}>
            <p>OURS STORES</p>
          </div>
        </div>
        <div className={styles.about_right}>
          <img src={about} className={styles.about_right_img} />
        </div>
      </div>
    </>
  );
}

export default Home;
