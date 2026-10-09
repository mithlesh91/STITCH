import app from "./src/app.js";

import { dbconnect } from "./src/Config/database.js";
 await dbconnect()

app.listen(3000,(req,res)=>{
    console.log("app is running port 3000")
})