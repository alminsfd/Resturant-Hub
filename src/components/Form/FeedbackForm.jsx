'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = ({ postdataq }) => {
     const router = useRouter()
     const handlesubmit = async (e) => {
          e.preventDefault();
          const message = e.target.message.value;
          const data = await postdataq(message)
          // console.log(postdataq)
          // const feedbackdata = { message };
          // const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTDATA}/api/feedback`, {
          //      method: 'POST',
          //      headers: {
          //           'Content-Type': 'application/json'
          //      },
          //      body: JSON.stringify(
          //           feedbackdata
          //      )
          // })
          // const data = await res.json();
          console.log(data.insertedId)
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