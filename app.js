const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");
const bookRoutes= require("./routes/bookRoutes");


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "API running..." });
  });
  
app.use("/api/customer", customerRoutes);
app.use("/api/book", bookRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

