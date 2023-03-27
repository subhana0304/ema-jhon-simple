import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    const { img, name, seller, ratings, price } = props.product;

    const AddToCart = props.addToCart;

    // eta ekhane use korle side bar e use korte pabo na karon nich theke upore uthe na, tai etakei upore niye jacchi orthat shop e
    // const AddToCart = (product) =>{
    //     console.log(product);
    // }

    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => AddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>

    );
};

export default Product;