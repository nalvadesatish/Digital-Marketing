import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 9002;

const app = express();


app.use(express.static(path.join(__dirname, 'public'), { 'Content-Type': 'text/css' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define the userSchema first
const userSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: String,
  msg: String,
  service: String,
});

// Create the User model using the schema
const User = new mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost:27017/Website", {
})
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

app.get("/",(req,res)=>{
  res.send("Server Running")
})

app.post("/submit", async (req, res) => {
  const { fullname, phone, email,msg,service } = req.body;

  const newUser = new User({
    fullname,
    phone,
    email,
    msg,
    service,
  });

  try {
    await newUser.save();
    res.send({ message: "Successfully Sent" });
  } catch (err) {
    res.send(err);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
