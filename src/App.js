import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
//import * as firebase from "firebase";
import firebase from 'firebase/app';
//import {app} from './index';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading: true
    }

    this.db = firebase.firestore();
    //console.log('app:', app);
}

componentDidMount(){
  // this.db
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     //console.log(snapshot);
  //     snapshot.docs.map((doc) => {
  //       //console.log(doc.data())
  //     });

  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();

  //       data['id'] = doc.id;
  //       return data;
  //     });

  //     this.setState({products: products, loading: false})
  //   })


  this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products: products, 
        loading: false
      })
    })
}

handleIncreaseQuantity = (product) => {
    //console.log(product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //     //use shorthand instead of writing products:products since both the variable have same name.
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
      qty:products[index].qty + 1
    })
    .then(() => {
      console.log("Successfully updated");
    })
    .catch((error) => {
      console.log("Error:", error);
    })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
            
    const index = products.indexOf(product);
    if(products[index].qty <= 0)
        return;
    // products[index].qty -= 1;

    // this.setState({
    //     products:products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty:products[index].qty - 1
      })
      .then(() => {
        console.log("Successfully updated");
      })
      .catch((error) => {
        console.log("Error:", error);
      })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products:items
    // })


    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Successfully delete");
      })
      .catch((error) => {
        console.log("Error:", error);
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

getTotalPrice = () => {
  const {products} = this.state;
  let totalPrice = 0;

  products.map((product) => {
    totalPrice += product.qty * product.price;
  })

  return totalPrice;
}
  render(){
    const {products, loading} = this.state;
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
      {loading && <h1>Loading Products...</h1>}
      <div style={{padding:20, fontSize:20}}>TOTAL:{this.getTotalPrice()}</div>
    </div>
  );
  }
}

export default App;
