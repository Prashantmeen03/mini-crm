const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const leadRoutes = require('./routes/leads');

app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});