const pg = require('pg');
const camelcase = require('camelcase');

const connectionString = process.env.DATABASE_URL;

console.log('connectionString', connectionString);

function pool(pgConfig) {
  const config = connectionString ? { connectionString } : pgConfig[pgConfig.defaultEnv];
  console.log('config', config);
  if (process.env.POSTGRES_HOST === 'localhost') {
    return new pg.Pool({
      ...config,
      ssl: false,
    });
  }

  return new pg.Pool(config);
}

async function drainPool(pgPool) {
  try {
    console.log('drainPgPool() - draining..');
    await pgPool.end();
    console.log('drainPgPool() - drained');
  } catch (error) {
    console.error('drainPgPool() - critical error draining:', { error });
    throw error;
  }
}

async function transact(pgPool, cmds) {
  const client = await pgPool.connect();
  const responses = [];
  try {
    await client.query('BEGIN');
    await client.query('SET LOCAL statement_timeout TO 60000;');
    for (const cmd of cmds) {
      const response = await client.query(cmd);
      responses.push(response);
    }
    await client.query('COMMIT');
    return responses;
  } catch (error) {
    await client.query('END');
    throw error;
  } finally {
    client.release();
  }
}

async function query(pgPool, cmd) {
  try {
    return (await transact(pgPool, [cmd]))[0];
  } catch (error) {
    throw error;
  }
}

function translateFieldNamesToCamelcase(row) {
  const newRow = {};
  for (const [key, value] of Object.entries(row)) {
    if (Array.isArray(value)) {
      if (typeof value[0] === 'object' && value[0] !== null) {
        newRow[camelcase(key)] = value.map(translateFieldNamesToCamelcase);
      } else {
        newRow[camelcase(key)] = value;
      }
    } else if (typeof value === 'object' && value !== null && value.constructor === Object) {
      newRow[camelcase(key)] = translateFieldNamesToCamelcase(value);
    } else {
      newRow[camelcase(key)] = value;
    }
  }

  return newRow;
}

module.exports = {
  pool,
  drainPool,
  query,
  transact,
  translateFieldNamesToCamelcase,
};
