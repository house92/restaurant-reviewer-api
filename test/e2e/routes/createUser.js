require('dotenv').config({ path: '.test.env' });
const request = require('supertest');
const { expect } = require('chai');

const app = require('../../../src/app');
const postgres = require('../../../postgres');
const { ROUTES } = require('../../../src/constants');

const pgConfig = {
  defaultEnv: 'local',
  local: {
    driver: 'pg',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    ssl: process.env.POSTGRES_SSL === 'true',
  },
};

const MOCK_USER = {
  name: 'Test McTesterson',
  email: 'test@test.com',
  password: 'test',
  isOwner: false,
};

const MOCK_USER_IS_OWNER = {
  ...MOCK_USER,
  isOwner: true,
};

const EXPECTED_BODY = JSON.parse(JSON.stringify({
  ...MOCK_USER,
  password: undefined,
}));

const pgPool = postgres.pool(pgConfig);
const testApp = app.create(pgPool);

describe('test/routes/createUser.js', () => {
  afterEach(async () => {
    await postgres.query(pgPool, 'DELETE FROM users');
  });

  after(async () => {
    await postgres.drainPool(pgPool);
  });

  it('should insert a user', async () => {
    const res = await request(testApp)
      .post(ROUTES.users)
      .send(MOCK_USER)
      .expect(200);

    const { id, ...rest } = res.body;

    expect(id).to.be.a('number');
    expect(rest).to.deep.equal(EXPECTED_BODY);
  });

  it('should insert an owner if user is an owner', async () => {
    const res = await request(testApp)
      .post(ROUTES.users)
      .send(MOCK_USER_IS_OWNER)
      .expect(200);

    const { isOwner, ownerId } = res.body;

    expect(isOwner).to.be.ok;
    expect(ownerId).to.be.a('number');
  });
});