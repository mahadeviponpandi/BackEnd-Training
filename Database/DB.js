const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://mahadevi:maha%402003@cluster0.quylhuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("DB is connected");
}).catch((error)=>{
    console.log("DB connection or fetching error :",error);
})