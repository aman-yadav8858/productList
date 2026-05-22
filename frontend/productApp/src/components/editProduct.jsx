import { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import AppContext from '../Context/context';
import { useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
function EditProduct() {
	const { refreshData } = useContext(AppContext);
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	const updateProduct = async (e) => {
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
		try{
			await axios.patch(`http://localhost:8000/products/${id}`, {
				title: title,
				price: price
			})
			refreshData();
			navigate("/");
		}catch(error){
			console.log(error.message);
		}
	}

	useEffect(() => {
		getProductById();
	}, []);

	const getProductById = async () => {
		const response = await axios.get(`http://localhost:8000/products/${id}`);
		setTitle(response.data.title);
		setPrice(response.data.price);
	}
	return (
		<>
			<div className='d-flex justify-content-center'>
				<div className='text-center mt-4 border p-5 rounded-3 shadow'>
					<form onSubmit={updateProduct}>
						<div className='group'>
							<label className='label fw-bold mx-3 fs-5'>Title :</label>
							<input type="text" placeholder='Title' id='title' className='px-2' value={title} onChange={(e) => setTitle(e.target.value)} />
						</div>

						<div className='group mt-4'>
							<label className='label fw-bold mx-3 fs-5'>Price :</label>
							<input type="text" placeholder='Price' id='price' className='px-2' value={price} onChange={(e) => setPrice(e.target.value)} />
						</div>

						<div className='group mt-3'>
							<button className='btn btn-danger shadow-none px-3'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
export default EditProduct;