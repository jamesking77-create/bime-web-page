import React, { useState } from 'react';
import '../styles/reviews.css';

const Reviews = () => {
  const [hoveredReviewText, setHoveredReviewText] = useState('');

  const handleReviewHover = (text) => {
    setHoveredReviewText(text);
  };

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Reviews</h1>
      <div className="reviews-box">
        <div className="reviews" id='r1' onMouseEnter={() => handleReviewHover('Text for Review 1')}>
          {/* Content for Review 1 */}
        </div>
        <div className="reviews" onMouseEnter={() => handleReviewHover('Text for Review 2')}>
          {/* Content for Review 2 */}
        </div>
        <div className="reviews" onMouseEnter={() => handleReviewHover('Text for Review 3')}>
          {/* Content for Review 3 */}
        </div>
        <div className="reviews" onMouseEnter={() => handleReviewHover('Text for Review 4')}>
          {/* Content for Review 4 */}
        </div>
        <div className="reviews" onMouseEnter={() => handleReviewHover('Text for Review 5')}>
          {/* Content for Review 5 */}
        </div>
      </div>
      <div className="review-text-box">
        {hoveredReviewText && <p>{hoveredReviewText}</p>}
      </div>
    </div>
  );
}

export default Reviews;

