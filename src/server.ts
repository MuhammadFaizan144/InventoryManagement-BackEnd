import mongoose from 'mongoose';
import app from './app';
import config from './config';

// cache connection across serverless calls
let isConnected = false;

async function connectToMongoDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(config.database_url as string);

    isConnected = db.connections[0].readyState === 1;

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
}

// 👇 THIS is what Vercel needs
export default async function handler(req: any, res: any) {
  await connectToMongoDB();
  return app(req, res);
}