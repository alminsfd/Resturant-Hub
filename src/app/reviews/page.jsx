import React from 'react';
import ReviewsPage from './ReviewsPage';
export const metadata = {
  title: {
    absolute: 'all-reviews',
  },
  description: "This is my own restrurent ",
};


const page = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};
export default page;