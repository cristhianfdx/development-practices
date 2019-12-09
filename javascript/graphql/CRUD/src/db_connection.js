import mongoose from 'mongoose';

import config from './config.js';

mongoose.connect(config.host, {useNewUrlParser: true})
.then(()=> console.log("Database conected"))
.catch(err=>console.log("Error", err));

export default mongoose;