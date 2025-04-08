const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routers/auth/auth-router');


mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
);

app.use(passport.initialize());

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter);


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));