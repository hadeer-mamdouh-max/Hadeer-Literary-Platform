import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import type { HealthResponse } from '@hadeer/types';

// Load environment variables
dotenv.config();

const app: Express = express();

// Security middleware
app.use(helmet());

// CORS configuration based on environment
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

// Standard JSON parser
app.use(express.json());

// Health check endpoint conforming to shared HealthResponse type
app.get('/api/v1/health', (_req: Request, res: Response<HealthResponse>) => {
  const response: HealthResponse = {
    status: 'ok',
  };
  res.status(200).json(response);
});

export { app };
