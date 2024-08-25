const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "API running..." });
  });
  
app.use("/api/customer", customerRoutes);
app.use("/api/order", orderRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

