import axios from "axios";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext({
	title: "",
	price: "",
	refreshData:()=>{}
});

export const AppProvider = ({ children }) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");

	const refreshData = async () => {
		try {
			const response = await axios.get("http://localhost:8000/products");
			const product = response.data;
			setTitle(product.title);
			setPrice(product.price);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		refreshData();
	}, []);

	return (
		<AppContext.Provider value={{title, price,refreshData}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
