import { connect } from '@/app/lib/dbConnect';
import FeedbackForm from '@/components/Form/FeedbackForm';
import React from 'react';


const Addfeedback = () => {

     return (
          <div>
               <h1>Add Feedback </h1>
               <FeedbackForm postdataq={postdataq} ></FeedbackForm>
          </div>
     );
};

export default Addfeedback;