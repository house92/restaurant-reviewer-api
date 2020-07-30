require('dotenv').config();
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../../src/app');
const postgres = require('../../../postgres');
const { ROUTES } = require('../../../src/constants');
const generateCreateUserSqlQuery = require('../../../src/sqlQueries/generateCreateUserSqlQuery');
const generateCreateOwnerSqlQuery = require('../../../src/sqlQueries/generateCreateOwnerSqlQuery');

function generateMockObjects(isOwner = false, isAdmin = false) {
  const MOCK_USER_DATA = {
    name: 'Tom',
    email: 'tom@gmail.com',
    password: 'test',
    isOwner,
    isAdmin,
  };

  const MOCK_SQL_RESPONSE = {
    rows: [
      {
        id: 1,
        name: MOCK_USER_DATA.name,
        email: MOCK_USER_DATA.email,
        is_owner: MOCK_USER_DATA.isOwner,
        is_admin: MOCK_USER_DATA.isAdmin,
      },
    ],
  };

  let additionalMockSqlResponse;

  if (isOwner) {
    additionalMockSqlResponse = {
      rows: [
        {
          id: 1,
          user_id: MOCK_SQL_RESPONSE.rows[0].id,
        },
      ],
    };
  }

  const expectedResponseBody = {
    id: MOCK_SQL_RESPONSE.rows[0].id,
    name: MOCK_USER_DATA.name,
    email: MOCK_USER_DATA.email,
    isOwner: MOCK_USER_DATA.isOwner,
    isAdmin: MOCK_USER_DATA.isAdmin,
  };

  if (isOwner) {
    expectedResponseBody.ownerId = additionalMockSqlResponse.rows[0].id
  }

  return [
    MOCK_USER_DATA,
    MOCK_SQL_RESPONSE,
    expectedResponseBody,
    additionalMockSqlResponse,
  ];
}

const [
  MOCK_USER_DATA,
  MOCK_SQL_RESPONSE,
  EXPECTED_RESPONSE_BODY,
] = generateMockObjects();

const [
  MOCK_OWNER_DATA,
  MOCK_OWNER_SQL_RESPONSE,
  EXPECTED_OWNER_RESPONSE_BODY,
  ADDITIONAL_MOCK_OWNER_SQL_RESPONSE,
] = generateMockObjects(true);

const pgPoolStub = {};

const testApp = app.create(pgPoolStub);

describe('test/routes/createUser.js', () => {
  afterEach(() => {
    postgres.query.restore();
  });

  it('should return the expected object when creating a regular user', async () => {
    const mock = sinon.mock(postgres)
      .expects('query')
      .once()
      .withExactArgs(pgPoolStub, generateCreateUserSqlQuery(MOCK_USER_DATA))
      .returns(MOCK_SQL_RESPONSE);

    const res = await request(testApp)
      .post(ROUTES.users)
      .send(MOCK_USER_DATA)
      .expect(200);

    mock.verify();
    expect(res.body).to.deep.equal(EXPECTED_RESPONSE_BODY);
  });

  it('should return the expected object when creating an owner', async () => {
    const mock = sinon.mock(postgres)
      .expects('query')
      .twice()
      .onFirstCall()
      .returns(MOCK_OWNER_SQL_RESPONSE)
      .onSecondCall()
      .returns(ADDITIONAL_MOCK_OWNER_SQL_RESPONSE);

    const res = await request(testApp)
      .post(ROUTES.users)
      .send(MOCK_OWNER_DATA)
      .expect(200);

    expect(mock.firstCall.lastArg).to.deep.equal(generateCreateUserSqlQuery(MOCK_OWNER_DATA));
    expect(mock.secondCall.lastArg).to.deep.equal(generateCreateOwnerSqlQuery(MOCK_OWNER_SQL_RESPONSE.rows[0].id));

    mock.verify();
    expect(res.body).to.deep.equal(EXPECTED_OWNER_RESPONSE_BODY);
  });
});