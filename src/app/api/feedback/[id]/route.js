import { connect } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"


const FeedbackCollection = connect("feedback")


export async function GET(request, { params }) {
     const { id } = await params
     const _id = new ObjectId(id)
     if (id.length !== 24) {
          return Response.json(
               {
                    status: 400,
                    message: 'Invalid ID format'
               }
          )
     }
     const result = await FeedbackCollection.findOne({ _id: _id })
     const singleFeedback = result || {}
     return Response.json(singleFeedback)
}

export async function DELETE(request, { params }) {
     const { id } = await params
     const _id = new ObjectId(id)
     if (id.length !== 24) {
          return Response.json({
               status: 400,
               message: 'Invalid ID format'
          })
     }
     const result = await FeedbackCollection.deleteOne({ _id: _id })
     return Response.json(result)


}

export async function PATCH(request, { params }) {
     const { id } = await params
     const _id = new ObjectId(id)
     const { message } = await request.json()
     if (id.length !== 24) {
          return Response.json({
               status: 400,
               message: 'Invalid ID format'
          })
     }
     if (!message || typeof message !== 'string') {
          return Response.json({
               status: 400,
               message: 'please send a massage'
          })
     }
     const updateDoc = {
          $set: { message: message }
     }
     const result = await FeedbackCollection.updateOne({ _id: _id }, updateDoc)
     return Response.json(result)
}
