const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./utils/db.js");;
const configPath = path.resolve(__dirname,"../backend/Config/config.env");

dotenv.config({ path: configPath });




connectDB();

const sever=app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
  
  });

  process.on("unhandleError",(err)=>{
	console.log(`Error :${err.message}`);
	console.log("shuting down the server becouse unhandle Error");
	sever.close(()=>{
	  process.exit(1)
	})
  })