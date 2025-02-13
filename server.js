const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3300;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server on 0.0.0.0 (accessible in LAN)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://192.168.56.1:${PORT}`);
});
