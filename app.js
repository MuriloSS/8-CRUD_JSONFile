import express from "express";
import userRouter from "./src/Routes/UserRoutes.js";
const app = express();
const port = process.env.PORT || 3000;


app.get("/",(req, res) => {
  res.status(200).send({mensage: "Home Page"});
});

app.use("/users", userRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
