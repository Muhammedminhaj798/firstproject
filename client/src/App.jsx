import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import Women from "./components/Women";
import Colloctions from "./components/Colloctions";
import Man from "./components/Man";
import Contact from "./pages/Contact";
import Footer from "./Navbar/Footer";
import Kids from "./components/Kids";
import Cart from "./pages/Cart";
import ProdectDetails from "./pages/ProdectDetails";
import CartProvider from "./context/CartProvider";
import UsersProvider from "./context/UserContext";
import AuthProvider from "./context/AuthProvider";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Admin from "./admin/admin";
import HomeAdmin from "./admin/HomeAdmin";
import AdmProduct from "./admin/AdmProduct";
import Users from "./admin/Users";

function App() {
  return (
    <UsersProvider>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/collections" element={<Colloctions />} />
            <Route path="/man" element={<Man />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment_details" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin_page" element={<Admin />} />
            <Route path="/admin_home"element={<HomeAdmin/>}/>
            <Route path="/admin-product"element={<AdmProduct/>}/>
            <Route path="/admin_users"element={<Users/>}/>

            <Route
              path="/man/productdetails/:id"
              element={<ProdectDetails />}
            />
            <Route
              path="/kids/productdetails/:id"
              element={<ProdectDetails />}
            />
            <Route
              path="/women/productdetails/:id"
              element={<ProdectDetails />}
            />
            <Route
              path="/collections/productdetails/:id"
              element={<ProdectDetails />}
            />
            <Route
              path="/admin_home/productdetails/:id"
              element={<ProdectDetails/>}/>
            <Route
              path="*"
              element={<h1>not found</h1>}/>
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </UsersProvider>
  );
}

export default App;
