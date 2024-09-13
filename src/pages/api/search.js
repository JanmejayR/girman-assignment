import connectToDatabase from '../../lib/dbconnect.js';
import Data from '../../models/DataModel.js';

export default async function handler(req, res) {
  await connectToDatabase();
  console.log(' connected to database')
  const { query } = req.query; 
  if (!query) {
    return res.status(400).send('Query parameter is required.');
  }
  try {

    

    const data = await Data.find({
      $or: [
        { first_name: new RegExp(query, 'i') },
        { last_name: new RegExp(query, 'i') }
      ]
    });

    console.log(" the data" , data)
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error retrieving data.');
  }
}