import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
	BrowserRouter as Router,
	Routes,
	Navigate,
	Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:category" element={<ProductList />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/success" element={<Success />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
};

export default App;
