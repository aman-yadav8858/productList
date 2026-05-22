const productModel=require("../models/productsModel");
const express=require('express');
const router=express.Router();

router.get('/products',async(req,res)=>{
	try{
		const products=await productModel.find();
		res.json(products);
	}catch(err){
		res.status(400).json({error:err.message});
	}
})
 
router.get('/products/:id', async (req, res) => {
	try{
		const products = await productModel.findById(req.params.id);
		res.json(products);
	}catch(err){
		res.status(400).json({error:err.message})
	}
});

router.post('/products',async(req,res)=>{
	try{
		const products=await productModel.create(req.body);
		res.json(products);
	}catch(err){
		res.status(400).json({error:err.message});
	}
});

router.patch('/products/:id',async(req,res)=>{
	try{
		const products=await productModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{new:true});
		res.json(products)

	}catch(err){
		res.status(400).json({error:err.message});
	}
})


 router.delete('/products/:id',async(req,res)=>{
	try{
		await productModel.findByIdAndDelete(req.params.id);
		res.send("Task deleted");
	}catch(err){
		res.status(400).json({error:err.message})
	}
 })

module.exports=router;