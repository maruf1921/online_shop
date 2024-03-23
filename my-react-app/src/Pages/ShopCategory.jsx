import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import all_product from '../Components/Assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from './../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = props => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div><img className="shopcategory-banner" src={props.banner} alt="" /></div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <div><img src={dropdown_icon} alt="" /></div>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
         
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore"> Explore More</div>
    </div>
  );
};

export default ShopCategory;
