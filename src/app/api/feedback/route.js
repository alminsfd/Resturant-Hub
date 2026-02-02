import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";


const FeedbackCollection = connect("feedback")
export async function GET(request) {

     const result = await FeedbackCollection.find().toArray()

     return Response.json(result)
}


export async function POST(request) {
     const { message } = await request.json()
     if (!message || typeof message !== 'string') {
          return Response.json({
               status: 400,
               message: 'please send a massage'
          })
     }
     const newfeedback = { message, date: new Date().toISOString() }
     const result = await FeedbackCollection.insertOne(newfeedback)
     revalidatePath('/feedback')
     return Response.json(result)
}