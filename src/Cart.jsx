import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) =>{
        const products = props.products;
        return(
        <div className='cart'>
            {products.map((product) => {
                return (
                <CartItem 
                    product={product} 
                    key={product.id} 
                    onClickIncreaseQuantity={props.onClickIncreaseQuantity}
                    onClickDecreaseQuantity={props.onClickDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
                )
            })}
        </div>
    )
}
export default Cart;