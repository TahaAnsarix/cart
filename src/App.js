import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: '',
                id:1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 4,
                img: '',
                id:2
            },
            {
                price: 1500,
                title: 'Laptop',
                qty: 1,
                img: '',
                id:3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {
    //console.log(product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        //use shorthand instead of writing products:products since both the variable have same name.
        products
    })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
            
    const index = products.indexOf(product);
    if(products[index].qty <= 0)
        return;
    products[index].qty -= 1;

    this.setState({
        products:products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products:items
    })
    
}

getTotalProductCount = () => {
  const {products} = this.state;  
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  });

  return count;
}

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar 
        count={this.getTotalProductCount()}
      />
      <Cart
        products={products}
        onClickIncreaseQuantity={this.handleIncreaseQuantity}
        onClickDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
    </div>
  );
  }
}

export default App;
