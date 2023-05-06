/* 
Lib and all its contents/middleware are not utilzed for cors anymore
We will be using the cors headers from nwxt.config.js instead
*/
import Cors, { CorsOptions } from 'cors';
import initMiddleware from './init-middleware';

const isAllowedOrigin = (origin: string | undefined): boolean => {
  const allowedOrigins = [
    'https://cacta.abdulahadsiddiqui.com',
  ];

  if (origin && origin.endsWith('.vercel.app')) {
    return true;
  }

  if (origin && origin.startsWith('http://localhost')) {
    return true;
  }

  return allowedOrigins.includes(origin || '');
};

// Initialize the cors middleware with custom options
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const cors = initMiddleware(Cors(corsOptions));

export default cors;
