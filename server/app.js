const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");
const bookRoutes = require('./routes/bookRoutes'); // Ensure this is correctly imported

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "API running..." });
});

// Mount the routes
app.use("/api/customer", customerRoutes);
app.use('/api/books', bookRoutes); // This is critical to mount bookRoutes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
