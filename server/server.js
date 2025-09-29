import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS for Angular frontend
app.use(cors({
  origin: 'http://localhost:4200',
  // Allow DPoP and Authorization headers
  exposedHeaders: ['DPoP', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'DPoP']
}));

// Kitties data
const kitties = [
  { image: 'cat1.jpeg', name: 'Mittens', race: 'Ragdoll' },
  { image: 'cat2.jpeg', name: 'Mauzi', race: 'Abyssinian' },
  { image: 'cat9.jpeg', name: 'Nala', race: 'Ragdoll' },
  { image: 'cat3.jpeg', name: 'Marsi & Meowny', race: 'Europ. Shorthair' },
  { image: 'cat4.jpeg', name: 'Susi', race: 'Siamese' },
  { image: 'cat5.jpeg', name: 'Lenny & Morle', race: 'Europ. Shorthair' },
  { image: 'cat6.jpeg', name: 'Moritz', race: 'Europ. Shorthair' },
  { image: 'cat7.jpeg', name: 'Whisky', race: 'British Shorthair' },
  { image: 'cat8.png', name: 'Raupy', race: 'Bengal' },
  { image: 'cat11.jpeg', name: 'Mimi', race: 'British Shorthair' },
  { image: 'cat10.jpeg', name: 'Lucy', race: 'Maine Coon' }
];

// GET /api/kitties
app.get('/api/kitties', (req, res) => {
  const query = req.query.query?.toLowerCase();
  
  if (query) {
    const filteredKitties = kitties.filter(kitty => 
      kitty.name.toLowerCase().includes(query)
    );
    res.json(filteredKitties);
  } else {
    res.json(kitties);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Kitty-Gram server running at http://localhost:${port}`);
});