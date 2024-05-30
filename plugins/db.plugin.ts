import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import { getEnvVariable } from '../utils/config';

export default fp(async fastify => {
  const mongoUri = getEnvVariable('MONGODB_URI') || 'mongodb://mongos:27017';
  const dbName = getEnvVariable('MONGODB_DB_NAME') || 'citdb';

  console.log(`Attempting to connect to MongoDB with URI: ${mongoUri} and DB name: ${dbName}`);

  const fullMongoUri = `${mongoUri}/${dbName}`;

  mongoose.connect(fullMongoUri);

  const db = mongoose.connection;

  db.on('open', () => {
    console.log('Successfully connected to MongoDB');
    // fastify.decorate('mongo', db);
  });

  let retryAttempts = 0;
  const maxRetryAttempts = 3;

  db.on('error', err => {
    if (retryAttempts < maxRetryAttempts) {
      retryAttempts++;
      setTimeout(() => mongoose.connect(fullMongoUri), 5000);
    } else {
      console.error('Max retry attempts reached. Giving up.');
    }
  });

  db.on('disconnected', () => {
    console.warn('Disconnected from MongoDB');
  });
});
