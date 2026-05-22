import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

const AddProduct = () => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const navigate = useNavigate();


	const saveProduct = async (e) => {
		e.preventDefault();
		const titleVal = $('#title').val().trim();
		const priceVal = $('#price').val().trim();

		if (titleVal === '') {
			alert('Please enter the product title!');
			return;
		}

		if (priceVal === '') {
			alert('Please enter the product price!');
			return;
		}

		if (isNaN(priceVal)) {
			alert('Price must be a valid number!');
			return;
		}
		try {
			await axios.post('http://localhost:8000/products', {
				title: title,
				price: price
			});
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<>
			<div className='d-flex justify-content-center'>
				<div className='text-center mt-4 border p-5 rounded-3 shadow'>
					<form onSubmit={saveProduct}>
						<div className='group'>
							<label className='label fw-bold mx-3 fs-5'>Title :</label>
							<input type="text" id='title' className='px-2' placeholder='Enter the title' value={title} onChange={(e) => setTitle(e.target.value)} />
						</div>
						<div className='group mt-3'>
							<label className='label fw-bold mx-3 fs-5'>Price :</label>
							<input type="text" id='price' className='px-2' placeholder='Enter the price' value={price} onChange={(e) => setPrice(e.target.value)} />
						</div>
						<div className='group mt-3'>
							<button className='btn btn-primary shadow-none px-3'>Save</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
export default AddProduct;