import productmodel from "../models/porduct.model.js";
import { uploadfile } from "../service/imagekit.service.js";


export const productcontroller = async (req,res)=>{
    const {title,discription,priceAmount,priceCurrency} = req.body
    const seller = req.user

    const image = await Promise.all(req.files.map(async(file)=>{
         return uploadfile({
            buffer:file.buffer,
            fileName: file.originalname
         })
         
    }))

    const product = await productmodel.create({
        title,
        discription,
        price:{
            currency:priceCurrency || "INR",
            amount:priceAmount
        },
        image,
        seller:seller._id
    })

    res.status(200).json({
        message:"product is created successful",
        success:true,
        product
    })
}