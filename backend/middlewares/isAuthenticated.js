const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv");
const configPath = path.resolve(__dirname,"../../backend/Config/config.env");

dotenv.config({ path: configPath });
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
module.exports= isAuthenticated;