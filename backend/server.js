const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const leadRoutes = require('./routes/leads');

app.use('/api/leads', leadRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});