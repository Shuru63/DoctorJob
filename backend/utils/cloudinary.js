const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const path = require("path");
const configPath = path.resolve(__dirname,"../../backend/Config/config.env");


dotenv.config({ path: configPath });


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
module.exports = cloudinary;