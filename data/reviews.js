const MOCK_RESTAURANTS = require('./restaurants');
const MOCK_USERS = require('./users');

const RATINGS = [1, 2, 3, 4, 5];

const REVIEW_COMMENTS = {
  1: [
    'Rubbish',
    'Avoid like the plague!',
    'Should be shut down',
  ],
  2: [
    'Wouldn\'t recommend',
    'Can\'t believe how much they charged',
  ],
  3: [
    'Decent value, but nothing incredible',
    'Okay',
  ],
  4: [
    'A good evening out',
    'The staff were friendly and the food was great',
  ],
  5: [
    'AMAZING',
    '100% would recommend!',
    'Will definitely be coming back',
  ],
};

const reviews = [];

function getRandomRating() {
  return RATINGS[Math.floor(Math.random() * 4.9)];
}

function getRandomComment(rating) {
  return REVIEW_COMMENTS[rating][Math.floor(Math.random() * (rating - 0.1))];
}

function getRandomDate() {
  return new Date(Date.now() - (Math.random().toPrecision(9) * 1000000000));
}

for (const restaurant of MOCK_RESTAURANTS) {
  for (const user of MOCK_USERS) {
    const shouldReview = Math.random() > 0.1;
    if (shouldReview) {
      const rating = getRandomRating();
      const comment = getRandomComment(rating)
      const visitDate = getRandomDate();

      reviews.push({
        user: { email: user.email },
        restaurant: { name: restaurant.name },
        rating,
        comment,
        visitDate,
      });
    }
  }
}

module.exports = reviews;
