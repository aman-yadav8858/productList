function ProductTitle(){
	return(
		<>
			<div className="container mb-2">
				<div className="row bg-secondary align-items-center border rounded-3"> 
					<div className="col-lg-2 col-md-3 col-12 text-center">
						<img src='/image/productIcon.png' style={{height:'100px',width:'120px'}}/>
					</div>
					<div className="col-lg-10 col-md-9 col-12 text-light text-center">
						<h1 className="display-2 fw-bold">Product List...</h1>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductTitle;