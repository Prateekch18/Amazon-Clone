import React from 'react'
import './Product.css'
import ReactStars from "react-rating-stars-component";
import { useStateValue } from './StateProvider';
function Product({id, title, image, price}) {
    const [{basket}, dispatch] = useStateValue();
    
    

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const addToBasket = () =>{
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    
                },
            });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
