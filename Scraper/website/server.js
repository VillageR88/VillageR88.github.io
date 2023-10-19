const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://backend.frontendmentor.io/rest/v2/learners/6509b84f9bce289b050307a8/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Błąd w pobieraniu danych z API' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer proxy działa na porcie ${PORT}`);
});
