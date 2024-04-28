import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
       
        dbName: 'PET_APP' // Specify your database name here
    }).then(() => {
        console.log("DB connected");
    }).catch((err) => {
        console.error("Error connecting to database:", err);
    });
};
