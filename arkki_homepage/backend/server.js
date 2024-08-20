const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '../.env' }); // Specify the path to the .env file

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', uri); // Debugging log
console.log('PORT:', PORT); // Debugging log

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('ArkkiDB'); // Correct database name
    const playersCollection = database.collection('players'); // Correct collection name

    app.get('/players', async (req, res) => {
      try {
        const players = await playersCollection.find().toArray();
        console.log('Fetched players:', players); // Debugging log
        res.json(players);
      } catch (err) {
        console.error('Error fetching players:', err);
        res.status(500).json({ error: 'Failed to fetch players' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

run().catch(console.dir);