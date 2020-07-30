const sql = require('sql-template-strings');

function generateCreateReviewReplySqlQuery(reviewReplyData) {
  return sql`
    INSERT INTO review_replies (
      review_id,
      owner_id,
      body
    ) VALUES (
      ${reviewReplyData.reviewId},
      ${reviewReplyData.ownerId},
      ${reviewReplyData.body}
    )
    RETURNING id, review_id, owner_id, body;
  `;
}

module.exports = generateCreateReviewReplySqlQuery;
