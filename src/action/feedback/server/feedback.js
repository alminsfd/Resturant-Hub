"use server"
import { connect } from "@/app/lib/dbConnect"
export const postdataq = async (message) => {
     const result = await connect('feedbacks').insertOne({
          message,
          data: new Date()
     })
     return {
          ...result,
          insertedId: result.insertedId.toString()
     }
}

export const getFeedback = async () => {
     const feedback = await connect('feedbacks').find().toArray()
     return feedback
}
