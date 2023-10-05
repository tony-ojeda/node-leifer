const mongoose = require(`mongoose`);

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI
    console.log(`DATA URI`, DB_URI)
    mongoose.connect(DB_URI)
        .then(
            () => console.log(`****** Sucess connected mongo db  *****`), 
            (err) => console.log(`****** Error mongo db: ****** \n`, err)
        )
 }

 module.exports = dbConnect;