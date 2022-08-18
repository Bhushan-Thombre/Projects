import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import UserListScreen from './screens/UserListScreen.js';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen.js';
import ProductEditScreen from './screens/ProductEditScreen.js';
import OrderListScreen from './screens/OrderListScreen.js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';

const App = () => {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    const getClientId = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');

      setClientID(clientId);
    };

    if (!window.paypal) {
      getClientId();
    }
  }, []);

  const initialOptions = {
    'client-id': clientID,
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <>
      {clientID && (
        <PayPalScriptProvider options={initialOptions}>
          <Router>
            <Header />
            <main className="py-3">
              <Container>
                <Routes>
                  <Route path="/order/:id" element={<OrderScreen />} />
                  <Route path="/shipping" element={<ShippingScreen />} />
                  <Route path="/payment" element={<PaymentScreen />} />
                  <Route path="/placeorder" element={<PlaceOrderScreen />} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
                  <Route path="/cart">
                    <Route path=":id" element={<CartScreen />} />
                    <Route path="" element={<CartScreen />} />
                  </Route>
                  <Route path="/search/:keyword" element={<HomeScreen />} />
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/page/:pageNumber" element={<HomeScreen />} />
                  <Route
                    path="/search/:keyword/page/:pageNumber"
                    element={<HomeScreen />}
                  />
                  <Route path="/admin/userlist" element={<UserListScreen />} />
                  <Route
                    path="/admin/user/:id/edit"
                    element={<UserEditScreen />}
                  />
                  <Route
                    path="/admin/productlist"
                    element={<ProductListScreen />}
                  />
                  <Route
                    path="/admin/productlist/:pageNumber"
                    element={<ProductListScreen />}
                  />
                  <Route
                    path="/admin/product/:id/edit"
                    element={<ProductEditScreen />}
                  />
                  <Route
                    path="/admin/orderlist"
                    element={<OrderListScreen />}
                  />
                </Routes>
              </Container>
            </main>
            <Footer />
          </Router>
        </PayPalScriptProvider>
      )}
    </>
  );

  // return (
  //   <Router>
  //     <Header />
  //     <main className="py-3">
  //       <Container>
  //         <Routes>
  //           <Route path="/order/:id" element={<OrderScreen />} />
  //           <Route path="/shipping" element={<ShippingScreen />} />
  //           <Route path="/payment" element={<PaymentScreen />} />
  //           <Route path="/placeorder" element={<PlaceOrderScreen />} />
  //           <Route path="/login" element={<LoginScreen />} />
  //           <Route path="/register" element={<RegisterScreen />} />
  //           <Route path="/profile" element={<ProfileScreen />} />
  //           <Route path="/product/:id" element={<ProductScreen />} />
  //           <Route path="/cart">
  //             <Route path=":id" element={<CartScreen />} />
  //             <Route path="" element={<CartScreen />} />
  //           </Route>
  //           <Route path="/" element={<HomeScreen />} />
  //         </Routes>
  //       </Container>
  //     </main>
  //     <Footer />
  //   </Router>
  // );
};

export default App;
