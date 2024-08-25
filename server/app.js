const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "API running..." });
  });
  
app.use("/api/customer", customerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

