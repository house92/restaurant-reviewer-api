require('dotenv').config();
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const postgres = require('../../../postgres');
const middleware = require('../../../src/middleware');
const { ROUTES } = require('../../../src/constants');
const generateCreateReviewSqlQuery = require('../../../src/sqlQueries/generateCreateReviewSqlQuery');

sinon.stub(middleware, 'authenticateUser')
  .callsFake((_, __, next) => next());

const app = require('../../../src/app');

const MOCK_REVIEW_DATA = {
  userId: 1,
  restaurantId: 1,
  rating: 3,
  comment: 'Test',
  visitDate: new Date().toISOString(),
}

const MOCK_SQL_RESPONSE = {
  rows: [
    {
      user_id: 1,
      rating: MOCK_REVIEW_DATA.rating,
      comment: MOCK_REVIEW_DATA.comment,
      visit_date: MOCK_REVIEW_DATA.visitDate,
    },
  ],
};

const EXPECTED_RESPONSE_BODY = {
  userId: 1,
  rating: 3,
  comment: 'Test',
  visitDate: MOCK_REVIEW_DATA.visitDate,
};

const pgPoolStub = {};
const sqlQuery = generateCreateReviewSqlQuery(MOCK_REVIEW_DATA);

const testApp = app.create(pgPoolStub);

describe('test/routes/createReview.js', () => {
  after(() => {
    postgres.query.restore();
    middleware.authenticateUser.restore();
  });

  it('should return the expected object', async () => {
    const mock = sinon.mock(postgres).expects('query').once().withExactArgs(pgPoolStub, sqlQuery).returns(MOCK_SQL_RESPONSE);

    const res = await request(testApp)
      .post(ROUTES.reviews)
      .send(MOCK_REVIEW_DATA)
      .expect(200);

    mock.verify();
    expect(res.body).to.deep.equal(EXPECTED_RESPONSE_BODY);
  });
});