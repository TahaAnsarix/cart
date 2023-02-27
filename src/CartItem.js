import React from 'react';

//class CartItem extends React.Component{
const CartItem = (props) => {
        const actionIconLinks = {
            increase: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
            decrease: 'https://cdn-icons-png.flaticon.com/512/992/992683.png',
            remove: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
        }

    //Commenting these functions since state is no longer present in this component
    // increaseQuantity = () => {
    //     console.log('this', this);
    //     //set state form 1
    //     // this.setState({
    //     //     qty:this.state.qty + 1
    //     // });

    //     //set state form 2 - if previous state is required then use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     const qty = this.state.qty;

    //     if(qty <= 0)
    //         return;
             
    //     this.setState((prevState => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     }));
    // }
        const {product, onClickIncreaseQuantity, onClickDecreaseQuantity, onDeleteProduct} = props;
        const {price, title, qty, img} = product;
        const {increase, decrease, remove} = actionIconLinks;

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img src={img} style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ { fontSize:25 } }> {title} </div>
                    <div style={ { color: '#777' } }> {price} </div>
                    <div style={ { color: '#777' } }> {qty} </div>
                    <div className='cart-item-actions'>
                        {/* Buttom */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src={increase}
                            onClick={() => onClickIncreaseQuantity(product)} 
                        />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src={decrease} 
                            onClick={() => onClickDecreaseQuantity(product)}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src={remove} 
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles = {
    image:{
        height: 110,
        width: 100,
        borderRadius:4,
        background:'#777'
    }
}

export default CartItem;