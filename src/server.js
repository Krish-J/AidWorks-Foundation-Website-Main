import express from 'express';
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  
})

app.get("/hello", (req, res) => {
  res.send("Hello!!");
});

app.listen(3000, () => console.log("Server is listening on port 3000"));