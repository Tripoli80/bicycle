import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";

///
//routes
///

import bycycleRouter from "./routes/bicycle-routes.js";

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 минута
  max: 100, // максимальное количество запросов за 1 минуту
  message: "Too many requests from your IP, please try again later.",
});

// Apply the rate limiting middleware to API calls only

const app = express();
// Настройки CORS
const allowedOrigins = ['http://bikerent.s3-website.eu-central-1.amazonaws.com', "http://localhost:3000", "localhost:3000"];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // Указывает, что сервер может отправлять куки в ответ на запросы с другого домена
};
app.options("*", cors(corsOptions));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/bikecycle", bycycleRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Routs not found" });
});
export default app;
