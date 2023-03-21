import React from "react";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { NavLink } from "react-router-dom";

const CategoryPreview=({title, products})=>
{
     return (
        <>
          <div className="category-preview-container">
           <h2>
              <NavLink className="title" to={title}>{title.toUpperCase()}</NavLink>
           </h2>
            <div className="preview">
              {
                products.filter((_, idx)=> idx < 4)
                .map((product)=>(
                <ProductCard key={product.id} product = {product}/>
                ))
              }
            </div>
          </div>
        </>
     )

}
export default CategoryPreview;
