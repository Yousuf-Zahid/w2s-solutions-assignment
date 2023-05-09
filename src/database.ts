import mongoose from "mongoose";


async function connectDatabase() {
    try{
        const uri: string = `${process.env.MONGO_URI}`;

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(uri, options as any)
            .then(() => console.log('DataBase is connected'))
            .catch((err) => console.log(err));

    }catch(err){
        console.log(err)
    }
}

export {connectDatabase}