'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
     const router = useRouter()
     const handlesubmit = async (e) => {
          e.preventDefault();
          const message = e.target.message.value;
          const feedbackdata = { message };
          const res = await fetch('http://localhost:3000/api/feedback', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(
                    feedbackdata
               )
          })
          const data = await res.json();
          if (data.insertedId) {
               alert('Feedback submitted successfully');
               router.push('/feedback')
               e.target.reset();
          }

     };
     return (
          <div>
               <form onSubmit={handlesubmit}>
                    <div>
                         <label htmlFor="message">Message:</label>
                         <textarea
                              required
                              id="message"
                              name="message"
                              rows="4"
                              cols="50"
                              className="w-full p-2 border rounded-lg">

                         </textarea>
                    </div>
                    <div>
                         <button className="btn">
                              Submit Feedback
                         </button>
                    </div>
               </form>
          </div>
     );
}

export default FeedbackForm;