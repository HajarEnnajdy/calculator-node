const express = require("express");
const app = express();

// routes
app.get("/add/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ result: a + b });
});

app.get("/divide/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (b === 0) {
        return res.status(400).json({ error: "division by zero" });
    }

    res.json({ result: a / b });
});

module.exports = app;

// démarre le serveur seulement si lancé directement
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}