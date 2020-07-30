require('dotenv').config();
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../../src/app');
const postgres = require('../../../postgres');
const { ROUTES } = require('../../../src/constants');

const NOW = new Date().toISOString();

const MOCK_QUERY_RESPONSE = {
  rows: [
    {
      restaurant: {
        id: 1,
        name: 'Test 1',
        address: '1 Test Street',
        description: 'test',
        reviews: [
          {
            rating: 3,
            visit_date: NOW,
            comment: 'test',
          },
          {
            rating: 4,
            visit_date: NOW,
            comment: 'test',
          },
        ],
      },
    },
  ],
};

const EXPECTED_RESTAURANT = {
  id: 1,
  name: 'Test 1',
  address: '1 Test Street',
  description: 'test',
  averageRating: 3.5,
  reviews: [
    {
      rating: 3,
      visitDate: NOW,
      comment: 'test',
    },
    {
      rating: 4,
      visitDate: NOW,
      comment: 'test',
    },
  ]
};

const testApp = app.create();

describe('test/routes/getRestaurantById.js', () => {
  before(() => {
    sinon.stub(postgres, 'query')
      .returns(MOCK_QUERY_RESPONSE);
  });

  after(() => {
    postgres.query.restore();
  });

  it('should return the expected object', async () => {
    const res = await request(testApp)
      .get(`${ROUTES.restaurants}/${EXPECTED_RESTAURANT.id}`)
      .expect(200);

    expect(res.body).to.deep.equal(EXPECTED_RESTAURANT);
  });
});