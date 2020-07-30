require('dotenv').config();
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../../src/app');
const postgres = require('../../../postgres');
const { ROUTES } = require('../../../src/constants');
const generateSelectUserSqlQuery = require('../../../src/sqlQueries/generateSelectUserSqlQuery');

const MOCK_USER_DATA = {
  email: 'tom@gmail.com',
  password: 'test',
};

const MOCK_SQL_RESPONSE = {
  rows: [
    {
      name: 'Tom',
      email: 'tom@gmail.com',
      is_owner: false,
    },
  ],
};

const EXPECTED_RESPONSE_BODY = {
  name: 'Tom',
  email: MOCK_USER_DATA.email,
  isOwner: false,
};

const pgPoolStub = {};
const sqlQuery = generateSelectUserSqlQuery(MOCK_USER_DATA);

const testApp = app.create(pgPoolStub);

let session;

describe('test/routes/createUser.js', () => {
  after(() => {
    postgres.query.restore();
  });

  it('should return the expected object', async () => {
    const mock = sinon.mock(postgres).expects('query').once().withExactArgs(pgPoolStub, sqlQuery).returns(MOCK_SQL_RESPONSE);

    const res = await request(testApp)
      .post(ROUTES.authenticate)
      .send(MOCK_USER_DATA)
      .expect(200);

    mock.verify();

    expect(res.body).to.deep.equal(EXPECTED_RESPONSE_BODY);
  });
});