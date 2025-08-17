const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // or whatever your frontend port is
  credentials: true
}));


app.use('/api/blogs', blogRoutes); 
app.use('/api/testimonials', testimonialRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
