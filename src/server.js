import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Tega",
    lastName: "Otega",
    email: "tega.otega@example.com",
    createdAt: "17-03-2004",
    updatedAt: "17-03-2004"
  });
}); 

app.get("/user", (req, res) => {
  res.status(200).json({
    id: 1,
    firstName: "Tega",
    lastName: "Otega",
    email: "tega.otega@example.com",
    createdAt: "17-03-2004",
    updatedAt: "17-03-2004"
  });
}); 

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});