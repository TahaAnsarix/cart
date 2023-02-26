import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        this.actionIconLinks = {
            increase: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
            decrease: 'https://cdn-icons-png.flaticon.com/512/992/992683.png',
            remove: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
        }

        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this', this);
        //set state form 1
        // this.setState({
        //     qty:this.state.qty + 1
        // });

        //set state form 2 - if previous state is required then use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const qty = this.state.qty;

        if(qty <= 0)
            return;
             
        this.setState((prevState => {
            return {
                qty: prevState.qty - 1
            }
        }));
    }

    render(){
        const {price, title, qty} = this.state;
        const {increase, decrease, remove} = this.actionIconLinks;

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
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
                            onClick={this.increaseQuantity} 
                        />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src={decrease} 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src={remove} 
                        />
                    </div>
                </div>
            </div>
        );
    };
};

const styles = {
    image:{
        height: 110,
        width: 100,
        borderRadius:4,
        background:'#777'
    }
}

export default CartItem;