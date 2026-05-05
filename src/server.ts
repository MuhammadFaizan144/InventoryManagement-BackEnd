import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
}

main();

// ❌ DO NOT listen on Vercel
export default app;