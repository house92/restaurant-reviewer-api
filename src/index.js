require('dotenv').config();
const DBMigrate = require('db-migrate');
const connectPg = require('connect-pg-simple');

const app = require('./app');
const postgres = require('../postgres');

const connectionString = process.env.DATABASE_URL;

console.log('connectionString', connectionString);
console.log('process.env.POSTGRES_USER', process.env.POSTGRES_USER);

const pgConfig = {
  defaultEnv: 'dev',
  dev: {
    driver: 'pg',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    ssl: process.env.POSTGRES_SSL === 'true',
  },
};

const port = process.env.PORT || 8080;

async function stop(isError, pgPool) {
  try {
    console.log('stop() - stopping..');
    if (pgPool !== null) {
      await postgres.drainPool(pgPool);
    }
    console.log('stop() - stopped');
    process.exit(isError ? 1 : 0);
  } catch (error) {
    console.error('stop() - critical error stopping:', { error });
    process.exit(1);
  }
}

async function syncDbMigrations() {
  try {
    console.log('syncDbMigrations() - syncing..');
    let dbMigrate;
    if (connectionString) {
      console.log('syncDbMigrations() - using DATABASE_URL..');
      dbMigrate = DBMigrate.getInstance(true);
    } else {
      console.log('syncDbMigrations() - using config..');
      dbMigrate = DBMigrate.getInstance(true, {
        config: pgConfig,
      });
    }
    await dbMigrate.up();
    console.log('syncDbMigrations() - synced');
  } catch (error) {
    console.error('syncDbMigrations() - critical error syncing:', { error });
    throw error;
  }
}

async function startHttpServer(pgPool) {
  console.log('startHttpServer() - starting..');
  try {
    await (new Promise((resolve, reject) => {
      app.create(pgPool, (session) => new (connectPg(session))({
        pool: pgPool,
      })).listen(port, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }));
    console.log('startHttpServer() - started');
  } catch (error) {
    console.error('startHttpServer() - critical error starting:', { error });
    throw error;
  }
}

async function start() {
  let pgPool;
  try {
    console.log('start() - starting..');
    process.on('SIGINT', async () => {
      console.warn('SIGINT signal received');
      await stop(false, pgPool);
    });
    process.on('SIGTERM', async () => {
      console.warn('SIGTERM signal received');
      await stop(false, pgPool);
    });
    process.on('uncaughtException', async (error) => {
      try {
        console.error('start() - uncaughtException', { error });
        if (process.env.DO_SEND_ERRORS_TO_SENTRY === 'true') {
          await ravenCaptureException(error);
        }
      } catch (e) {
        console.error('index - error sending uncaught exception to Raven', { error: e });
      }
      await stop(true, pgPool);
    });

    // Run database migrations
    await syncDbMigrations();
    // Set up postgres pool
    pgPool = postgres.pool(pgConfig);

    await startHttpServer(pgPool);

    console.log(`start() - started on port: ${port}..`);
  } catch (error) {
    console.error('start() - critical error starting:', { error });
    await stop(true, pgPool);
  }
}

start();
