
import mongoose from 'mongoose';

// const url = 'mongodb+srv://mail1project1:team123456@cluster0.kcqny2i.mongodb.net/ToDo' ;
// const dbName = 'Sticky Note ';

async function connectDB() {
await  mongoose.connect('mongodb+srv://mail1project1:team123456@cluster0.kcqny2i.mongodb.net/StickyNotes')
 .then(()=>{
   console.log("DB is Connected");
 }).catch((err)=>{
  console.log(err) ;
 })


  // const client = new MongoClient(url);

  // try {
  //   await client.connect();
  //   console.log('Connected to the database');
  //   return client.db(dbName);
    
  // } catch (error) {
  //   console.error('Error connecting to the database:', error);
  //   throw error;
  // }
  // client.disconnect();
  // console.log('unConnected');
}

connectDB();

export default connectDB;