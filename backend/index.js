import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authroutes.js';
import AuthMiddleware from './middleware/authmiddleware.js';
import questionRoutes from './routes/questionroutes.js';
import protectedRoutes from './routes/protectedroutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://experience-iitd-frontend.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.options(/.*/, cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', questionRoutes);
app.use('/api', AuthMiddleware, protectedRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
