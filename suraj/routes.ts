import routes from "express";


const router = routes.Router();

router.get("/api", (req, res) => {
    res.send("Hey there");
});


export default router;
