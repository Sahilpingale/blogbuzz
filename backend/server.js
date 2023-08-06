import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const port = 5001;

const __dirname = path.resolve();
// connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../blogbuzz/frontend/build")));

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../blogbuzz/frontend/build", "index.html")
  );
});


app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the backend!",
  };
  res.json(data);
});

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
