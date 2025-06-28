const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { emailOrUser, password } = req.body;

  if (emailOrUser === "student" && password === "1234") {
    res.json({ message: "Login successful!" });
  } else {
    res.json({ message: "Invalid credentials." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});