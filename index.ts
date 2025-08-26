import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/api/echo", (req, res) => {
    res.json({ received: req.body });

});


app.get("/api/data", (req, res) => {
    res.json({ message: "This is some data from the server." });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);