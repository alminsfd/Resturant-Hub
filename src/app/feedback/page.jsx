export const dynamic = 'force-dynamic';
import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import { connect } from '../lib/dbConnect';
import { getFeedback } from '@/action/feedback/server/feedback';


export const metadata = {
     title: "Feedback Page"
}

//  const getFeedback = async () => {
//      const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTDATA}/api/feedback`,
//           {
//                // cache: 'force-cache',
//                next: { revalidate: 60 }
//           }
//      );
//      const data = await res.json()
//      return data;
// }

const Feedbackpage = async () => {
     const feedbacks = await getFeedback()

     return (
          <div>
               <Link href='/feedback/add' className='px-4 py-2 bg-blue-500 text-white rounded-lg inline-block mb-4' >
                    Add Feedback
               </Link>
               <h2 className="text-2xl font-bold">
                    {feedbacks.length} Feedbacks found
               </h2>
               <div className='my-3  space-y-3' >
                    {
                         feedbacks.map(feedback => <FeedbackCard key={feedback._id} feedback={feedback} ></FeedbackCard>)
                    }
               </div>
          </div>
     );
};

export default Feedbackpage;