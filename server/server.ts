import connectDB from './utils/db';
import {app} from './app';
require('dotenv').config();


//create server
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDB();
})