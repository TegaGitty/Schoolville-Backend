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

const getBooks = async (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    data: books,
  });
};

const getBookByID = async (req, res) => {
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
  };

  const createBook = async (req, res) => {
    const newBook = {
      id: Math.floor(Math.random() * 1000),
      title: req.body.title,
    }
    books.push(newBook)
    res.status(201).json({
      data: newBook,
      message: "New book created successfully",
     
    });
  };

const updateBook = async (req, res) => {
const findBook = books.find(item => item.id === Number(req.params.id));

if (findBook) {
findBook.title = req.body.title || findBook.title;

res.status(200).json({
  message: "Book updated successfully",
  data: findBook
})

} else {
  res.status(404).json({
    message: "Book not found"
  })
 }
};

const deleteBook = async (req, res) => {
  const findBook = books.find(item => item.id === Number(req.params.id));

  if (findBook) {
    const deleteBook = books.splice(findBook, 1);
    
    res.status(204);
  } else {
    res.status(404).json({
      message: "Book not found"
    });
  }
};

export {
    getBooks,
    getBookByID,
    createBook,
    updateBook,
    deleteBook,
}