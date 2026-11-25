import express from "express";

const app = express();

app.use(express.json());

let books = [
  
  {
    id:1,
    title: "Boook 1", 
    },
    {
    id:2,
    title: "Boook 2", 
    },
    {
    id:3,
    title: "Boook 3", 
    },
]

app.get("/api/books", (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    data: books,
  });
  });

  app.get("/api/books/:id", (req, res) => {
    console.log("Working");
    const book = books.find(item => item.id == req.params.id)
  
  if (book) {
    res.status(200).json({
      message: "Book fetched successfully",
      data: book
    })
  } else {
    res.status(404).json({
      message: "Book not found",
    })

  }
  });

  app.post("/api/books", (req, res) => {
    const newBook = {
      id: Math.floor(Math.random() * 1000),
      title: req.body.title,
    }
    books.push(newBook)
    res.status(201).json({
      data: newBook,
      message: "New book created successfully",
     
    })
  })



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});