
import productmodel from "../models/porduct.model.js";

export async function getproduct(req, res) {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "Invalid user"
            });
        }

        const products = await productmodel.find({
            seller: user._id
        });

        return res.status(200).json({
            message: "Products fetched successfully",
            products: products
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}
