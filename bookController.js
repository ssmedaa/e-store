const Book = require('../models/book'); 

const getAllBooks= async(req, res)=>{
    try{
    const b= await Book.findAll();
    res.status(200).json(b);
    }
    catch(error){
        res.status(500).json({message:'error on getting all books',error});
    }
}
    
const getBookById=async(req,res)=>{
    const{id}=req.params;
    try{
        const b= await Book.findByPk(id);
        res.status(200).json(b);

    }  catch(error){
        res.status(500).json({message:'error on getting books by id',error});

    }
    } 

const  updateBook=async(req, res)=>{
    const{id}=req.params;
    const{title, inventoryNumber,price,description,rating,url,stripeID,category}=req.body;
    try{
    const bookUpd= await Book.findByPk(id);
    b.inventoryNumber=inventoryNumber||b.inventoryNumber;

    res.status(200).json('updated book');
    }
    catch(error){
        res.status(500).json({message:'error on update',error});

    }

}
module.exports= {getAllBooks,getBookById, updateBook}

