require('dotenv').config();
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../../src/app');
const postgres = require('../../../postgres');
const { ROUTES } = require('../../../src/constants');

const MOCK_QUERY_RESPONSE = {
  rows: [
    {
      id: 1,
      name: 'Test 1',
      average_rating: 3.5,
    },
    {
      id: 2,
      name: 'Test 2',
      average_rating: 4.5,
    },
  ],
};

const EXPECTED_RESTAURANTS = [
  {
    id: 1,
    name: 'Test 1',
    averageRating: 3.5,
  },
  {
    id: 2,
    name: 'Test 2',
    averageRating: 4.5,
  },
];

const testApp = app.create();

describe('test/routes/getRestaurants.js', () => {
  before(() => {
    sinon.stub(postgres, 'query')
      .returns(MOCK_QUERY_RESPONSE);
  });

  after(() => {
    postgres.query.restore();
  });

  it('should return the expected array', async () => {
    const res = await request(testApp)
      .get(ROUTES.restaurants)
      .expect(200);

    expect(res.body).to.deep.equal(EXPECTED_RESTAURANTS);
  });
});